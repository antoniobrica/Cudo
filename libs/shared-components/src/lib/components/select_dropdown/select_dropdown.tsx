import React, { useEffect } from 'react';
import './../../../assets/style/index.scss'
import Select from "react-select";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

export interface selectWithAddNew {
  selectedValue?
  folderOpen?
}


const options = [
  { value: "Abe", label: "Abe" },
  { value: "John", label: "John" },
  { value: "Dustin", label: "Dustin" },
  { value: "Rahul", label: "Rahul" },
  { value: "John", label: "John" },
  { value: "Dustin", label: "Dustin" },
  { value: "Rahul", label: "Rahul" },
  { value: "John", label: "John" },
  { value: "Dustin", label: "Dustin" },
  { value: "Rahul", label: "Rahul" },


];

// const formatOptionLabel = ({ value, label, addlabel }) => (
//   <div style={{ display: "flex" }}>
//     <div><a>{addlabel}</a></div>
//     <div>{label}</div>
//   </div>
// );

//   const addLinkOption = ({ value, addlabel }) => (
//     <div style={{ display: "flex" }}>
//       <div><a href="">{addlabel}</a></div>
//     </div>
//   );



export function SelectDropdown(props: selectWithAddNew) {

  const onSelectChange = (data) => {
    props.selectedValue(data.value)
  }

  const CustomMenu = ({ innerRef, innerProps, children }) => (
    <div ref={innerRef} {...innerProps} className="customReactSelectMenu">
      <button
        className="btn btn-info btn-sm btn-block"
        onClick={() => props.folderOpen()}
      >Add New Folder</button>
      {children}
    </div>
  )

  return (
    <div>
      <Select
        // value={options[0]}
        placeholder='Select'
        // addLinkOption={addLinkOption}
        // formatOptionLabel={formatOptionLabel}
        options={options}
        onChange={(value) => onSelectChange(value)}
        components={{ Menu: CustomMenu }}
        isClearable
        on
      />
    </div>
  );
}




export default SelectDropdown;