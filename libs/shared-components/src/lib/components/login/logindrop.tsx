import React from 'react';
 
import '../../../style/index.scss';
import {Select, Input, Segment,Form, Grid ,Image,Checkbox,Button,Icon } from 'semantic-ui-react'
import logo from 'libs/shared-components/src/slider.png';
import img from 'libs/shared-components/src/Shape 2.png';
/* eslint-disable-next-line */
export interface LoginDropProps { }

export function Logindrop(props: LoginDropProps) {
    const countryOptions = [
        { key: 'af', value: 'af', text: 'Afghanistan' },
        { key: 'ax', value: 'ax', text: 'Aland Islands' },
        { key: 'al', value: 'al', text: 'Albania' }, 
      ]
    const description = [
         
      ] 
  return (
    <div className="app-content-body ">
        
        <div className="main-outer-area">
 
            <Grid className="ui-login">
                    
            <Grid.Row columns={2}  >
      <Grid.Column>
             <Segment>
             <div className="ln-form-outer">
             
             <img src={img}   />
                    <div className="form-header">
                    
                        <span className="welcome">Welcome Back</span>
                    <h2 className="login">Select your company</h2>
                    
                    </div>

                    <div className="form-inner">

                    <Form>
                      <Form.Field>
                      <label>softobiz@gmail.in <span className="float-area"> 
        <i className="ms-Icon ms-Icon--Accounts" aria-hidden="true"></i> </span> </label>  
                      </Form.Field>
                        <Form.Field>
                        <Select placeholder='Select' options={countryOptions} className="full-width" />
                        </Form.Field>
                        <Button size='large' className="grey-btn btn-large">Next <Icon name='arrow right' />   </Button>
                         
 
                        </Form>
                    </div>  

              </div>
            </Segment>
            </Grid.Column>
            <Grid.Column>
       
        <img src={logo} className="massive" />
       
      </Grid.Column>
            </Grid.Row>
             
            </Grid>
 
          
        </div>

        

    </div>
        
    
 
  );
}

export default Logindrop;