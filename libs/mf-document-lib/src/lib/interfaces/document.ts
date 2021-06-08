export interface IToken {
  accountSASToken: string
}
export interface IFile {
  isFolder: boolean
  uploadedFileID: string
  directory: string
  parentUploadedFileID: string
  projectFileID: string
  BKPID: string
  BKPIDTitle: string
  folderName: string
  phaseID: string
  phaseName: string
  fileTypeID: string
  fileTypeName: string
  structureID: string
  structureTitle: string
  updatedAt: string
  createdAt: string
  updatedBy: string
  createdBy: string
  isEveryOneAllowed: Boolean
  fileURL: string
  fileTitle: string
  fileType: string
  fileVersion: number
  people: [IPeople]
  children: [IFileParam]
}
export interface IFileParam {
  fileURL: string
  fileTitle: string
  fileType: string
  fileVersion: string
  isEveryOneAllowed: boolean
  fileTypeName: string
  fileTypeID: string,
  uploadedFileID: string
}
export interface ISavePins {
  pinsID: string
  uploadedFileID: string
  x_axis: string
  y_axis: string
  z_axis: string
  isDeleted: string
  pageNumber: number
  pinId: number

}
export interface IPeople {
  userID: string
  userName: string
}
export interface IPeoples {
  people: IPeople[]
}
export interface IFiles {
  uploadedFiles: IFile[];
}

export interface FileMutation {
  createFile: IFile;
}