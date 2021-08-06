import React from 'react';
import './../../../assets/style/index.scss'
import Select from "react-select";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';




const options = [
    { value: "addLink", addlabel: "Add Link" },
    { value: "Abe", label: "Abe"},
    { value: "John", label: "John" },
    { value: "Dustin", label: "Dustin" }
  ];
  
  const formatOptionLabel = ({ value, label, addlabel }) => (
    <div style={{ display: "flex" }}>
    <div><a href="">{addlabel}</a></div>
      <div>{label}</div>
    </div>
  );

//   const addLinkOption = ({ value, addlabel }) => (
//     <div style={{ display: "flex" }}>
//       <div><a href="">{addlabel}</a></div>
//     </div>
//   );
  
export function SelectDropdown() {

  return (
    <div>
      <Select
        defaultValue={options[0]}
        // addLinkOption={addLinkOption}
        formatOptionLabel={formatOptionLabel}
        options={options}
        />
    </div>
  );
}




export default SelectDropdown;