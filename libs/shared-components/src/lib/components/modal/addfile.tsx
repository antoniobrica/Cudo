import React from 'react';
import { Button, Header,   Modal,  Tab,Table,  Input, Form, Grid, Image, Select, TextArea} from 'semantic-ui-react';
// import SampleModal from './sample-modal';
 
import img from 'libs/shared-components/src/upload.png';
export interface FileProps {
  fileData
  onFileSubmit
 }

function ModalAddPrint( props: FileProps) {
    const countryOptions = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
         
      ]

 
  const [open, setOpen] = React.useState(false)
  const [file, setFile] = React.useState("")

  const onFileChange = event => {
    const fl = event.target.files[0];
    // console.log('file==>',fl)
    setFile(fl);
    props.fileData(fl);

  };
  const upload = () =>{
    setOpen(false);
    props.onFileSubmit();
  }
  return (
    <div id="navbar">
    <Modal className="modal_media modal_center modal_media_1"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button size='mini' className="grey-btn">+ Add  File</Button> }
    >
      <Modal.Header><h3>Add File </h3></Modal.Header>
      <Modal.Content body>
        
        <div>
 
      
      <Form>
<Grid columns={1}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
  <div className="dashed_area md_upload">
  <div className="file-upload-message">
  <img src={img}  className="mr-10 " />
      <p className="file-upload-default-message">Drag & drop or click here to upload file</p>
      
      </div>
  <Input  type="file" className="file-upload-input" onChange={onFileChange}  />
  </div>
    
    </Form.Field>
  </Grid.Column>
 
</Grid.Row>
</Grid>

<Grid columns={1}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
    <div className="content">
                <div className="description">File settings
               <span className="float_right"><i className="ms-Icon ms-Icon--ChevronRightMed" aria-hidden="true"></i> </span> 
                </div> 
                
            </div>
    </Form.Field>
  </Grid.Column>

  
</Grid.Row>
</Grid>
</Form>
   </div>
        
       
      </Modal.Content>
      <Modal.Actions>
      <Button
          content="Submit" 
          onClick={upload}
          positive
          size='mini' className="grey-btn"
        />
        <Button size='mini' className="icon-border" onClick={() => setOpen(false)}>
        X  Cancel
        </Button>
  
             
        
      </Modal.Actions>
    </Modal>
  </div>
  
  )
}

export default ModalAddPrint
 