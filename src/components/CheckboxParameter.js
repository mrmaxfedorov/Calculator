import React from "react";
import {Parameter, Checkbox} from "../styles/styles";

const CheckboxParameter = ({description, checked, onChange, type, name}) => {
  return (
    <Parameter>{description}
      <Checkbox
        checked={checked}
        onChange={onChange}
        type={type}
        name={name}
      />
    </Parameter>
  )
};

export default CheckboxParameter;