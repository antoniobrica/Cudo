import { TransferProgressEvent } from '@azure/core-http';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { BlobServiceClient, BlockBlobClient } from '@azure/storage-blob';
import { from, Observable, Subscriber } from 'rxjs';
import { distinctUntilChanged, scan, startWith } from 'rxjs/operators';
import {
  BlobContainerRequest,
  BlobFileRequest,
  BlobStorageRequest
} from '../types/azure-storage';

export class BlobStorageService {
  getContainers(request: BlobStorageRequest) {
    const blobServiceClient = this.buildClient(request);
    return this.asyncToObservable(blobServiceClient.listContainers());
  }

  listBlobsInContainer(request: BlobContainerRequest) {
    console.log('request',request);
    const containerClient = this.getContainerClient(request);
    return this.asyncToObservable(containerClient.listBlobsFlat());
  }

  downloadBlobItem(request: BlobFileRequest) {
    const blockBlobClient = this.getBlockBlobClient(request);
    return from(blockBlobClient.download());
  }

  deleteBlobItem(request: BlobFileRequest) {
    const blockBlobClient = this.getBlockBlobClient(request);
    return from(blockBlobClient.delete());
  }

  uploadToBlobStorage(file: File, request: BlobFileRequest) {
    console.log('uploadToBlobStorage', file, request)
    const blockBlobClient = this.getBlockBlobClient(request);
    return this.uploadFile(blockBlobClient, file);
  }

  private getBlockBlobClient(request: BlobFileRequest) {
    const containerClient = this.getContainerClient(request);
    return containerClient.getBlockBlobClient(request.filename);
  }

  private getContainerClient(request: BlobContainerRequest) {
    const blobServiceClient = this.buildClient(request);
    return blobServiceClient.getContainerClient(request.containerName);
  }

  private buildClient(options: BlobStorageRequest) {
    console.log('options-buildClient', options);
    return BlobServiceClient.fromConnectionString(
      this.buildConnectionString(options)
    );
  }

  private uploadFile(blockBlobClient: BlockBlobClient, file: File) {
    console.log('uploadFile====>>',blockBlobClient, file);
    return new Observable<number>(observer => {
      blockBlobClient
        .uploadBrowserData(file, {
          onProgress: this.onProgress(observer),
          blobHTTPHeaders: {
            blobContentType: file.type
          }
        })
        .then(
          this.onUploadComplete(observer, file),
          this.onUploadError(observer)
        );
    }).pipe(distinctUntilChanged());
  }

  private onUploadError(observer: Subscriber<number>) {
    return (error: any) => observer.error(error);
  }

  private onUploadComplete(observer: Subscriber<number>, file: File) {
    return () => {
      observer.next(file.size);
      observer.complete();
    };
  }

  private onProgress(observer: Subscriber<number>) {
    return (progress: TransferProgressEvent) =>
      observer.next(progress.loadedBytes);
  }

  private asyncToObservable<T, TService>(
    iterable: PagedAsyncIterableIterator<T, TService>
  ) {
    return new Observable<T>(
      observer =>
        void (async () => {
          try {
            for await (const item of iterable as AsyncIterable<T>) {
              if (observer.closed) return;
              observer.next(item);
            }
            observer.complete();
          } catch (e) {
            observer.error(e);
          }
        })()
    ).pipe(
      scan<T, T[]>((items, item) => [...items, item], []),
      startWith([] as T[])
    );
  }

  private buildConnectionString = (options: BlobStorageRequest) => {
    return (
      `BlobEndpoint=https://cudo.blob.core.windows.net/;SharedAccessSignature=sv=2019-02-02&spr=https%2Chttp&st=2021-03-22T06%3A41%3A10Z&se=2021-03-22T06%3A42%3A37Z&sip=0.0.0.0-255.255.255.255&sr=c&sp=racwdl&sig=ROFC9Ijx1h5yiwCB%2BkXWlR8DPIoN1k5iod0IhVuPwV4%3D`
      // `BlobEndpoint=${options.storageUri};` +
      // `SharedAccessSignature=${options.storageAccessToken}`
    );
  };
}
