import React from 'react';
import { GET_BKP, GET_FOLDER } from '../../graphql/graphql';
import { Dropdown, Form, Select } from 'semantic-ui-react';

import { useBkpQuery, useFolderQuery } from '../../services/useRequest';
import { SelectDropdown } from '@cudo/shared-components'
import './bkp.module.scss';
import { useTranslation } from 'react-i18next';
import AddFolderIndex from '../add-folder-index/add-folder-index';
import { useQuery } from '@apollo/client';

/* eslint-disable-next-line */
export interface BkpProps {
  parentBKPSelect?,
  bkp?
  folderOpen?
}

export function Bkp(props: BkpProps) {
  const [items, setItems] = React.useState([])
  const [items1, setItems1] = React.useState([])
  const [items2, setItems2] = React.useState([])
  const [BKPID, setBKPID] = React.useState("")
  const [folderopen, setFolderOpen] = React.useState(false);
  const [selectedFolder, setSelectedFolder] = React.useState(null)
  const [searchInput, setSearchInput] = React.useState("")

  const { t } = useTranslation()
  const setSearchValue = (data) => {
    setSearchInput(data)
  }
  // const { loading, error, data } = useBkpQuery(GET_BKP);
  const { loading, error, data } = useQuery(GET_BKP, {
    variables: { referenceID: "dapr", referenceType: "COMPANY", bkpId: BKPID, bkpTitle: searchInput }
  })
  // const { loading: folderL, error: folderE, data: FolderD } = useFolderQuery(GET_FOLDER)
  const { loading: folderL, error: folderE, data: FolderD } = useQuery(GET_FOLDER, {
    variables: { referenceID: "dapr", referenceType: "COMPANY", folderTitle: searchInput }
  })
  React.useEffect(() => {
    if (data && FolderD) {

      const bkps = data.Bkp.map(({ bkpTitle, bkpID }) => ({ key: bkpID, value: bkpTitle, text: bkpID + " - " + bkpTitle }))
      setItems(data.Bkp.map(({ bkpTitle, bkpID }) => ({ key: bkpID, value: bkpTitle, text: bkpID + " - " + bkpTitle })));
      const arr = FolderD.Folders.map(({ folderTitle, folderID }) => ({ key: folderID, value: folderTitle, text: folderTitle }))
      setItems1(arr);
      const bkpF = bkps.concat(arr);
      setItems2(bkpF);
    }
  }, [data, FolderD]);
  React.useEffect(() => {
    if (props?.bkp) {
      setBKPID(props?.bkp)
    }
  }, [props?.bkp])

  // React.useEffect(()=>{
  //   if(FolderD){

  //       const arr = FolderD.Folders.map(({ folderTitle, folderID }) => ({ key: folderID, value: folderTitle, text: folderTitle }))
  //       setItems1(arr);
  //       if(items){
  //       const bkpF= items.concat(arr);
  //       setItems2(bkpF);
  //       }

  //   }

  // }, [FolderD]);
  const folderOpen = () => {

    setFolderOpen(true);
  }
  const cancel = (data) => {
    setFolderOpen(false);
  }
  const folderData = (data) => {
    setFolderOpen(false)
  }

  const onBkp = (data) => {

    const bkpID = { BKPID: '', BKPIDTitle: '', isFolder: false };
    for (let i = 0; i <= items.length; i++) {
      if (items[i]?.value === data) {
        bkpID.BKPID = items[i].key;
        bkpID.BKPIDTitle = data;
      }
    }
    const folder = { folderID: '', folderTitle: '', isFolder: true };
    for (let i = 0; i <= items1.length; i++) {
      if (items1[i]?.value === data) {
        folder.folderID = items1[i].key;
        folder.folderTitle = data;
      }
    }
    setBKPID(data)
    let bkpFolder = null;
    let isFolder = false;
    if (bkpID.BKPIDTitle.length > 0) {
      // bkpFolder = bkpID;
      props.parentBKPSelect(bkpID);

    }
    else {
      bkpFolder = folder;
      props.parentBKPSelect(folder);
      isFolder = true;
    }

    // props.parentBKPSelect(bkpFolder);
  }

  const setSelectedFolderData = folderName => {
    setSelectedFolder(folderName)
  }


  return (
    <Form.Field>

      <label>{t("common.select_bkp")}   </label>
      {/* <Select name='bkp' placeholder={t("common.select")} className="small"
                options={items2}
                value={BKPID}
                onChange={onBkp}
                clearable
                search
              /> */}
      {folderopen ?
        <div>
          <AddFolderIndex open={folderopen} cancel={cancel} folderData={folderData} parentBKPSelect={props.parentBKPSelect} setSelectedFolderData={setSelectedFolderData} ></AddFolderIndex>
        </div> : null}
      <SelectDropdown folderOpen={folderOpen} options={items2} value={props?.bkp} onBkp={onBkp} setSearchValue={setSearchValue} selectedFolder={selectedFolder} />

    </Form.Field>
  );
}

export default Bkp;
