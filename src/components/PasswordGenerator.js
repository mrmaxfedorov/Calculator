import React, {useState} from "react";
import {Randomizer} from "./Randomizer";
// import ErrorPopUp from "./ErrorPopUp";
import {Container, Title, Parameters, Form, PasswordOutput, Button} from "../styles/styles";
import CheckboxParameter from "./CheckboxParameter";
import LengthParameter from "./LengthParameter";

const PasswordGenerator = () => {

  const [state, setState] = useState( {
    generatedPassword: '',
    passwordLength: 8,
    lowerCase: true,
    upperCase: true,
    numbers: true,
    symbols: false,
  });

  // const errorPopUp = () => {
  //   setIsShown(!isShown);
  // }

  const updateInput = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  };

  const updateCheckbox = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.checked
    })
  };

  const submit = (e) => {
    e.preventDefault();
    const passwordObject = Randomizer.getPasswordObject(state);
    if (!state.lowerCase && !state.upperCase && !state.numbers && !state.symbols) {
      // errorPopUp();
      alert('You have to select at least one character option to generate your password');
    } else {
      let password = Randomizer.generatePassword(passwordObject, state.passwordLength);
      setState({...state, generatedPassword: password})
    }
  };

  const handleCopy = () => {
    if (state.generatedPassword === "") {
      alert('There\'s nothing to copy yet');
    } else {
      navigator.clipboard.writeText(state.generatedPassword);
      console.log('copied')
    }
  };

  return (
    <>
      {/*<pre>{JSON.stringify(state)}*/}
      {/*  {JSON.stringify(isShown)}*/}
      {/*</pre>*/}
      <Container>
        {/*<ErrorPopUp name="errorPopUp" visibility={'hidden'}/>*/}
        <Title>Password Generator</Title>
        <Form onSubmit={submit}>
        <Parameters>
          <LengthParameter
            value={state.passwordLength}
            onChange={updateInput}
            type="range"
            min="4"
            max="20"
            step="1"
            name="passwordLength"
            output={JSON.stringify(+state.passwordLength)}
          />
          <CheckboxParameter
            description='include lowercase letters'
            checked={state.lowerCase}
            onChange={updateCheckbox}
            type="checkbox"
            name="lowerCase"
          />
          <CheckboxParameter
            description='include uppercase letters'
            checked={state.upperCase}
            onChange={updateCheckbox}
            type="checkbox"
            name="upperCase"
          />
          <CheckboxParameter
            description='include numbers'
            checked={state.numbers}
            onChange={updateCheckbox}
            type="checkbox"
            name="numbers"
          />
          <CheckboxParameter
            description='include symbols'
            checked={state.symbols}
            onChange={updateCheckbox}
            type="checkbox"
            name="symbols"
          />
          <Button
            type="submit"
            generate
          >
            Generate!</Button>
          <PasswordOutput
            type="text"
            placeholder="Your password will appear right here..."
            value={state.generatedPassword}
            onChange={updateInput}
            name="generatedPassword"
          />
          <Button
            type="button"
            onClick={(handleCopy)}>
            Copy me
          </Button>
        </Parameters>
        </Form>
      </Container>
    </>
  )
}

export default PasswordGenerator;