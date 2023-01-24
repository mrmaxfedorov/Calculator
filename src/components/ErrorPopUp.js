import React from "react";
import styled from "styled-components";

const ErrorPopUp = ({visibility}) => {

  return (
    <ErrorBlock visibility={visibility}>
      <ErrorText>At least one character option has to be selected!</ErrorText>
    </ErrorBlock>
  )
}

const ErrorBlock = styled.div`
    display: block;
    position: absolute;
    width: 200px;
    height: 60px;
    background-color: gray;
    visibility: ${props => props.visibility === "visible" ? "visible" : "hidden"};
  `
const ErrorText = styled.p`
  display: block;
  color: rgba(0, 255, 224, 0.82);
  font-size: 12px;
`

export default ErrorPopUp;