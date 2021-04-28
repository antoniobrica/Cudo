import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

function exampleReducer(state, action) {
  switch (action.type) {
    case 'close':
      return { open: false }
    case 'open':
      return { open: true, size: action.size }
    default:
      throw new Error('Unsupported action...')
  }
}

export interface AlertProps {
  openAlertF,
  confirm,
  taskData,
  cancel,
  taskStatus
}
export const ModalAlert = (props: AlertProps) => {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    open: false,
    size: undefined,
  })
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    if (props.openAlertF) {
      setOpen(props.openAlertF);
    }
  }, [props.openAlertF]);
  const openf = () => {
    setOpen(true)
  }
  const yes = () => {
    setOpen(false)
    props.confirm(true, props.taskData)
  }
  const cancel = () => {
    setOpen(false)
    props.cancel()
  }
  const size = undefined
  return (
    <Modal
      size={size}
      onClose={() => setOpen(false)}
      onOpen={openf}
      open={open} className="mini"
    >
      {/* <Modal.Header>Update your Task</Modal.Header> */}
      <Modal.Header>Update Task Status
        <a className="float_right" onClick={cancel}>  <i className="ms-Icon ms-Icon--CalculatorMultiply mr-10" aria-hidden="true"></i></a>

      </Modal.Header>
      <Modal.Content>
        <p className="text-center" style={{ color: "black" }}>Are you sure you want to {props.taskStatus} the task? </p>
      </Modal.Content>
      <Modal.Actions className="float_right">
        <Button positive onClick={yes}>
          Yes
          </Button>
        <Button negative onClick={cancel}>
          No
          </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalAlert
