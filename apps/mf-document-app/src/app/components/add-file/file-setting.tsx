import React from 'react';
import { Button, Checkbox,   Modal,  Tab,Table,  Input, Form, Grid, Image, Select, TextArea} from 'semantic-ui-react';
// import SampleModal from './sample-modal';
 
import img from 'libs/shared-components/src/upload.png';
import img2 from 'libs/shared-components/src/avatar_1.png';
import img3 from 'libs/shared-components/src/avatar_2.png';
import img4 from 'libs/shared-components/src/avatar_3.png';
import img5 from 'libs/shared-components/src/file_1.png';
import img6 from 'libs/shared-components/src/file_2.png';
import {FollowersIndex, AssigneeIndex, BkpIndex, PhaseIndex} from "@cudo/mf-account-app-lib"

export interface FileProps {
    openSettingF
   }
function FileSetting(props: FileProps) {
    const countryOptions = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
         
      ]

 const fileOptions = [
    { key: 'gen', value: 'gen', text: 'General' },
    { key: 'mo', value: 'mo', text: 'Monroe One Solar LLC' },
    { key: 'ft', value: 'ft', text: 'Freehold Two Solar LLC' },

 ]

 
 const fileTypeOptions = [
    { key: 'pa', value: 'pa', text: 'Parent' },
    { key: 'cu', value: 'cu', text: 'Cuts' },
    { key: 'sc', value: 'sc', text: 'Scheme' },
    { key: 'ap', value: 'ap', text: 'Apparatus plan' },
    { key: 'ip', value: 'ip', text: 'Installation plan' },
    { key: 'rp', value: 'rp', text: 'Router plan' },

 ]
 
 const projectOptions = [
    { key: 'ew', value: 'ew', text: 'Electrical Work' },
    { key: 'hv', value: 'hv', text: 'HVAC Work' },
    { key: 'pw', value: 'pw', text: 'Paint Work' },
 ]
  const [open, setOpen] = React.useState(false)
  const setBKPIDChange = (data) => {
    //setBKPID(data.value)
  }
  const onsetPhasesID = ( data) => {
   // setPhasesID(data.value);
  }
  React.useEffect(() => {
    if (props.openSettingF) {
        setOpen(props.openSettingF);

    }
  }, [props.openSettingF]);
   const openf=()=>{
    setOpen(true)
    console.log('openSettingF', props.openSettingF)
   }
  return (
    <div >
    <Modal className="modal_media modal_center modal_media_1"
      onClose={() => setOpen(false)}
      onOpen={openf}
      open={open}
      trigger={<Button size='mini' className="grey-btn">Uploaded File</Button> }
    >
      <Modal.Header><h3>Add File </h3></Modal.Header>
      <Modal.Content body>
        
        <div>
 
      
      <Form>
<Grid columns={1}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
  <div className="dashed_area" style={{paddingTop:15}}>
  <div className="file-upload-message">
  <img src={img}  className="mr-10 " />
      <p className="file-upload-default-message">Drag & drop or click here to upload file</p>
    
      </div>
  <Input  type="file" className="file-upload-input" />
  </div>
    
    </Form.Field>
  </Grid.Column>
 
</Grid.Row>
</Grid>
<br/><br/>
<Grid columns={2}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
    <label>Upload files</label>
      
    
    </Form.Field>
  </Grid.Column>
 
</Grid.Row>
</Grid>
{/* <Grid columns={12}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
  
   <img src={img5}  /> 
   
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
    <label></label>
    <label>File_name.cad</label>
    
   
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
 </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
   
    <i className="ms-Icon ms-Icon--CalculatorMultiply right_float" aria-hidden="true"></i>     
      </Form.Field>
  </Grid.Column>
 
</Grid.Row>
</Grid>
 
<Grid columns={12}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
  
   <img src={img5}  /> 
   
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
    <label></label>
    <label>File_name.cad</label>
    
   
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
 </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
   
    <i className="ms-Icon ms-Icon--CalculatorMultiply right_float" aria-hidden="true"></i>     
      </Form.Field>
  </Grid.Column>
 
</Grid.Row>
</Grid>
<Grid columns={12}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
  
   <img src={img6}  /> 
   
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
    <label></label>
    <label>File_name.cad</label>
    
   
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
 </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
     </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
   
    <i className="ms-Icon ms-Icon--CalculatorMultiply right_float" aria-hidden="true"></i>     
      </Form.Field>
  </Grid.Column>
 
</Grid.Row>
</Grid> */}
<Grid columns={1}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
    <div className="content">
                <div className="description">Generate file number
                  <p className="enable">Enable this option to generate file numbering</p>
                  <Checkbox toggle className="toggle_area" />
                 
                </div> 
                
            </div>
    </Form.Field>
  </Grid.Column>

  
</Grid.Row>
</Grid>
<Grid columns={2 }>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
      <label>Project</label>
      <Select placeholder='Select' className="small" options={projectOptions} />
         
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    {/* <Form.Field>
      <label>Project</label>
      <Select placeholder='Select' className="small" options={countryOptions} />
         
    </Form.Field> */}
    <PhaseIndex parentPhaseSelect={onsetPhasesID} />
  </Grid.Column>
</Grid.Row>
</Grid>
<Grid columns={3}>
<Grid.Row>
  <Grid.Column>
    {/* <Form.Field>
      <label>BKP/Folder</label>
      <Select placeholder='Select' className="small" options={countryOptions} />
         
    </Form.Field> */}
    <BkpIndex parentBKPSelect={setBKPIDChange}></BkpIndex>
      
  </Grid.Column>
 
  <Grid.Column>
    <Form.Field>
    <label>File type</label>
      <Select placeholder='Select' className="small" options={fileTypeOptions} />
             
    </Form.Field>
  </Grid.Column>
  <Grid.Column>
    <Form.Field>
    <label>File structure</label>
      <Select placeholder='Select' className="small" options={fileOptions} />
             
    </Form.Field>
  </Grid.Column>
</Grid.Row>
</Grid>
<Grid  >
<Grid.Row>
  <Grid.Column>
    <Form.Field>
      <label>Who can access</label>
          
    </Form.Field>
      
  </Grid.Column>
  
</Grid.Row>
</Grid>
<Grid columns={2} >
<Grid.Row>


  <Grid.Column>
    <Form.Field>
    <Checkbox label='Everyone in the Project/Work type' className="small" />      
    </Form.Field>
      
  </Grid.Column>
  
  <Grid.Column>
    <Form.Field>
    <Checkbox label='Specify People only' className="small" />    
          
    </Form.Field>
  </Grid.Column>
  
</Grid.Row>
</Grid>

<Grid columns={1} >
<Grid.Row>


  <Grid.Column>
    {/* <Form.Field> 
        <label>Select people</label>
      <Select placeholder='Select' className="small" options={countryOptions} />
       
    </Form.Field> */}
        <AssigneeIndex />

      
  </Grid.Column>
   
  
</Grid.Row>
</Grid>
<Grid columns={5} >
<Grid.Row>


  <Grid.Column>
    <Form.Field> 
       
      <div className="below_area">
      <img src={img2}  className="avatar"/> 
    <span className="span_name">Barthelemy Chalvet</span>
    <i className="ms-Icon ms-Icon--CalculatorMultiply right_float" aria-hidden="true"></i>     
    
  </div>
    </Form.Field>
      
  </Grid.Column>
   
  <Grid.Column>
    <Form.Field> 
       
      <div className="below_area">
      <img src={img3}  className="avatar"/> 
    <span className="span_name">Barthelemy Chalvet</span>
    <i className="ms-Icon ms-Icon--CalculatorMultiply right_float" aria-hidden="true"></i>     
    
  </div>
    </Form.Field>
      
  </Grid.Column>
  <Grid.Column>
    <Form.Field> 
       
      <div className="below_area">
      <img src={img4}  className="avatar"/> 
    <span className="span_name">Barthelemy Chalvet</span> 
    <i className="ms-Icon ms-Icon--CalculatorMultiply right_float" aria-hidden="true"></i>     
                                                                       
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
          onClick={() => setOpen(false)}
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

export default FileSetting
 