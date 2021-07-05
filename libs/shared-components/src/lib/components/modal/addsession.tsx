import React from 'react';
import {
  Button,
  Checkbox,
  Modal,
  Tab,
  Table,
  Input,
  Form,
  Grid,
  Image,
  Select,
  TextArea,
} from 'semantic-ui-react';
// import SampleModal from './sample-modal';
import { Dropdown } from 'semantic-ui-react';

import img2 from 'libs/shared-components/src/avatar_1.png';
import img3 from 'libs/shared-components/src/avatar_2.png';
import img4 from 'libs/shared-components/src/avatar_3.png';
import { MeetingCategoryIndex, SessionInvitationIndex, SessionProtocolIndex, FollowersIndex, AssigneeIndex, AdminsIndex, MembersIndex } from '@cudo/mf-account-app-lib';

export interface SessionProps {
  workTypes?
  createSession?
}

export function ModalSession(props: SessionProps) {
  const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
  ];

  const [open, setOpen] = React.useState(false);
  const [sessionTitle, setSessionTitle] = React.useState("");
  const [workType, setworkType] = React.useState(null)
  const [workTypeD, setworkTypeD] = React.useState(null)
  const [workTypeData, setworkTypeData] = React.useState('')
  const [worktypeID, setworktypeID] = React.useState("")
  const [worktypeName, setworktypeName] = React.useState("")
  const [catagory, setCatagory] = React.useState(null);
  const [protocol, setProtocol] = React.useState(null);
  const [invitation, setInvitation] = React.useState(null);
  const [admins, setAdmins] = React.useState<any>();
  const [members, setMembers] = React.useState<any>();


  const onSessionTitleChange = (e) => {
    setSessionTitle(e.target.value)
  }
  React.useEffect(() => {
    if (props.workTypes) {
      console.log('worktypes', props.workTypes);
      setworkType(props.workTypes.map(({ workTypeName, projectWorkTypeID }) => ({ key: projectWorkTypeID, value: workTypeName, text: workTypeName, id: projectWorkTypeID })));

    }
  }, [props.workTypes]);

  const onMworkType = (event, data) => {
    const workT = {
      worktypeID: '',
      worktypeName: ''
    };
    for (let i = 0; i < props.workTypes.length; i++) {
      if (props.workTypes[i]?.workTypeName === data.value) {
        console.log('props.worktypes[i]', props.workTypes[i]);
        workT.worktypeID = props.workTypes[i].projectWorkTypeID;
        workT.worktypeName = data.value;
        setworktypeName(workT.worktypeName);
        setworktypeID(workT.worktypeID);
        setworkTypeD(workT)
      }
    }
    setworkTypeData(data.value)

    console.log('worktypeName-', workTypeD);
  }

  const parentCatagorySelect = (data) => {
    console.log('parentCatagorySelect', data);
    setCatagory(data)
  }
  const parentSessionSelect = (data) => {
    console.log('parentSessionSelect', data);
    setProtocol(data)
  }
  const parentInvitationSelect = (data) => {
    console.log('parentInvitationSelect', data);
    setInvitation(data)
  }
  const onAdmins = (data) => {
    console.log('--admin-data---', data)
    setAdmins(data);
  }
  const onMembers = (data) => {
    setMembers(data)
  }
  const createSession = () => {
    setOpen(false);
    const adminList = admins?.map((item,index) => {
      return {adminID: item.userID, adminName: item.userName, image: ""}
    })
    // console.log('----add session adminList---', adminList)
    const memberList = members?.map((item,index) => {
      return {memberID: item.userID, memberName: item.userName, image: ""}
    })
    // console.log('----add session memberList---', memberList)
    const data = {
      sessionTitle: sessionTitle,
      meetingCategoryID: catagory.meetingCatagoryID,
      meetingCategoryTitle: catagory.meetingCatagoryTitle,
      protocolID: protocol.protocolTemplateID,
      protocolTitle: protocol.protocolTemplateTitle,
      invitationID: invitation.invitationTemplateID,
      invitationTitle: invitation.invitationTemplateTitle,
      worktypeID: workTypeD.worktypeID,
      worktypeTitle: workTypeD.worktypeName,
      admins: adminList, // : [{ adminID: "1", adminName: "ram", image: "image.com" }],
      members: memberList // : [{ memberID: "1", memberName: "lakhan", image: "image.com" }]
    }
    // console.log('----add session data---', data)
     props.createSession(data);
  }

  return (
    <div style={{ marginLeft: 900 }} >
      <Modal
        className="modal_media right-side--fixed-modal add-session-modal"
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button size="small" className="primary">
            + Add New Session{' '}
          </Button>
        }
      >
        <Modal.Header>
          <h3>Add sessions </h3>
        </Modal.Header>
        <Modal.Content body>
          <div>
            <Form>
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <label>
                        Name <span className="danger">*</span>
                      </label>
                      <Input
                        placeholder="Session Title"
                        size="small"
                        className="full-width"
                        type="text"
                        value={sessionTitle}
                        onChange={onSessionTitleChange}
                      />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <label>Work Type</label>
                      <Select
                        placeholder="Select"
                        className="small"
                        value={workTypeData}
                        options={workType}
                        onChange={onMworkType}
                      />
                    </Form.Field>
                  </Grid.Column>

                  <Grid.Column>
                    {/* <Form.Field>
                      <label>Category</label>
                      <Select
                        placeholder="Select"
                        className="small"
                        options={countryOptions}
                      />
                    </Form.Field> */}
                    <MeetingCategoryIndex parentCatagorySelect={parentCatagorySelect}></MeetingCategoryIndex>
                  </Grid.Column>
                </Grid.Row>
              </Grid>

              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    {/* <Form.Field>
                      <label>Admin</label>

                      <Dropdown
                        className="small_drop"
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        options={countryOptions}
                        placeholder="Select Country"
                      />
                    </Form.Field> */}
                    <AdminsIndex admins={[]} parentAdminsSelect={onAdmins} />

                  </Grid.Column>
                </Grid.Row>
                <div className="followers-label-area">
                  <Form.Field>
                    <div className="event top-event follower-listing-labels">
                      {admins?.map((p, id) => {
                        const name = p.userName.split(" ").map((n) => n[0]).join("");
                        //   "FirstName LastName".split(" ").map((n)=>n[0]).join(".");
                        return (
                          <div className="label-light-purple-circle label-spacer" key={id}>
                            <span className="white-text">{name}</span>
                          </div>
                        )
                      })
                      }
                    </div>
                  </Form.Field>
                </div>
              </Grid>

              {/* <Grid columns={5}>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <div className="below_area">
                        <img src={img2} className="avatar" />
                        <span className="span_name">Barthelemy Chalvet</span>
                        <i
                          className="ms-Icon ms-Icon--CalculatorMultiply right_float"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Form.Field>
                  </Grid.Column>

                  <Grid.Column>
                    <Form.Field>
                      <div className="below_area">
                        <img src={img3} className="avatar" />
                        <span className="span_name">Barthelemy Chalvet</span>
                        <i
                          className="ms-Icon ms-Icon--CalculatorMultiply right_float"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <div className="below_area">
                        <img src={img4} className="avatar" />
                        <span className="span_name">Barthelemy Chalvet</span>
                        <i
                          className="ms-Icon ms-Icon--CalculatorMultiply right_float"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid> */}
              <Grid columns={1}>
                <Grid.Row>
                  <Grid.Column>
                    {/* <Form.Field>
                      <label>Members</label>

                      <Dropdown
                        className="small_drop"
                        clearable
                        fluid
                        multiple
                        search
                        selection
                        options={countryOptions}
                        placeholder="Select Country"
                      />
                    </Form.Field> */}
                    <MembersIndex members={[]} parentMembersSelect={onMembers} />
                  </Grid.Column>
                </Grid.Row>
                <div className="followers-label-area">
                  <Form.Field>
                    <div className="event top-event follower-listing-labels">
                      {members?.map((p, id) => {
                        const name = p.userName.split(" ").map((n) => n[0]).join("");
                        //   "FirstName LastName".split(" ").map((n)=>n[0]).join(".");
                        return (
                          <div className="label-light-purple-circle label-spacer" key={id}>
                            <span className="white-text">{name}</span>
                          </div>
                        )
                      })
                      }
                    </div>
                  </Form.Field>
                </div>
              </Grid>

              {/* <Grid columns={5}>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <div className="below_area">
                        <img src={img2} className="avatar" />
                        <span className="span_name">Barthelemy Chalvet</span>
                        <i
                          className="ms-Icon ms-Icon--CalculatorMultiply right_float"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Form.Field>
                  </Grid.Column>

                  <Grid.Column>
                    <Form.Field>
                      <div className="below_area">
                        <img src={img3} className="avatar" />
                        <span className="span_name">Barthelemy Chalvet</span>
                        <i
                          className="ms-Icon ms-Icon--CalculatorMultiply right_float"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <div className="below_area">
                        <img src={img4} className="avatar" />
                        <span className="span_name">Barthelemy Chalvet</span>
                        <i
                          className="ms-Icon ms-Icon--CalculatorMultiply right_float"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid> */}
              <Grid columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    {/* <Form.Field>
                      <label>Template for invitation</label>
                      <Select
                        placeholder="Select"
                        className="small"
                        options={countryOptions}
                      />
                    </Form.Field> */}
                    <SessionInvitationIndex parentInvitationSelect={parentInvitationSelect} />
                  </Grid.Column>

                  <Grid.Column>
                    {/* <Form.Field>
                      <label>Template for protocol</label>
                      <Select
                        placeholder="Select"
                        className="small"
                        options={countryOptions}
                      />
                    </Form.Field> */}
                    <SessionProtocolIndex parentSessionSelect={parentSessionSelect} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Submit"
            onClick={createSession}
            positive
            size="small"
            className="primary"
          />
          <Button
            size="small"
            className="icon-border"
            onClick={() => setOpen(false)}
          >
            X Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}

export default ModalSession;
