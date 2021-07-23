import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Icon, Modal } from 'semantic-ui-react'

  export interface AlertProps {
    openAlertF,
    confirm,
    taskData,
    cancel,
    taskStatus
  }
  export const TaskDelete = (props: AlertProps) => {
  const [open, setOpen] = React.useState(false)
  const {t} = useTranslation()
  React.useEffect(() => {
    if (props.openAlertF) {
      setOpen(props.openAlertF);
    }
  }, [props.openAlertF]);
  const openf = () => {
    setOpen(true)
  }
  const yes =()=>{
    setOpen(false)
    props.confirm(true, props.taskData)
  }
  const cancel =()=>{
    setOpen(false)
    props.cancel()
  }
const size = undefined
  return (
    <>

      <Modal
        size={size}
        onClose={() => setOpen(false)}
        onOpen={openf}
        open={open} className="mini"
        closeOnDimmerClick={false}
      >
        {/* <Modal.Header>Update your Task</Modal.Header> */}
        <Modal.Header>{t("project_tab_menu.task.delete_task")} 
        <a className="float_right" onClick={cancel}>  <i className="ms-Icon ms-Icon--CalculatorMultiply mr-10" aria-hidden="true"></i></a> 
          
          </Modal.Header>
        <Modal.Content>
          <p className="text-center" style={{color: "black"}}>{t("project_tab_menu.task.delete_task_confirm")} </p>
        </Modal.Content>
        <Modal.Actions className="float_right">
        <Button positive onClick={yes}>
            {t("common.yes")}
          </Button>
          <Button negative  onClick={cancel}>
            {t("common.no")}
          </Button>
       
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default TaskDelete
