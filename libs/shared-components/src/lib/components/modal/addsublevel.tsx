import React from 'react';
import { Button, Breadcrumb,   Modal,  Tab,Table,  Input, Form, Grid, Image, Select, TextArea} from 'semantic-ui-react';
// import SampleModal from './sample-modal';
  

import img8 from 'libs/shared-components/src/greytask.png';
import img9 from 'libs/shared-components/src/treeview.png';
import img10 from 'libs/shared-components/src/cross.png';

function ModalAddSubLevel() {
    
 
  const [open, setOpen] = React.useState(false)
   
  return (
    <div id="navbar">
    <Modal className="modal_media modal_center modal_media_1"
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button size='mini' className="grey-btn">  Add Sub Level</Button> }
    >
      <Modal.Header><h3>Add sub level </h3>
      
      <Breadcrumb>
    <Breadcrumb.Section>  <img src={img8} style={{width:'10px'}} /> General</Breadcrumb.Section>
    <Breadcrumb.Divider icon='right chevron' />
    <Breadcrumb.Section  ><img src={img9} style={{width:'10px'}} /> 1st floor</Breadcrumb.Section>
     
  </Breadcrumb>
      </Modal.Header>
      <Modal.Content body>
        
        <div>
 
      
      <Form>
 

<Grid columns={1}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
    <label>Title</label>
      <Input placeholder='This is the top level' size='small' className="full-width" type="text" /> 
      
    </Form.Field>
  </Grid.Column>

  
</Grid.Row>
</Grid>
<Grid columns={1}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
      <Input style={{width:'98%'}} placeholder='Enter tile here...' size='small' className="full-width" type="text" /> <img src={img10} style={{width:'10px'}} />
    </Form.Field>
  </Grid.Column>
 
  
</Grid.Row>
</Grid>
<Grid columns={1}>
<Grid.Row>
  <Grid.Column>
    <Form.Field>
     <a href="" style={{color:'#2D62ED'}} >+ Add more</a>
     </Form.Field>
  </Grid.Column>
 
  
</Grid.Row>
</Grid>
</Form>
   </div>
        
       
      </Modal.Content>
      <Modal.Actions>
      <Button
          content="Add" 
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

export default ModalAddSubLevel
 