import React from "react";
import { Parameter, CharactersInput } from '../styles/styles';

const LengthParameter = ({value, onChange, type, min, max, step, name, output}) => {
  return (
    <Parameter>
      <CharactersInput
        value={value}
        onChange={onChange}
        type={type}
        min={min}
        max={max}
        step={step}
        name={name}
      />
      <output>{output} characters</output>
    </Parameter>
  )
}

export default LengthParameter;