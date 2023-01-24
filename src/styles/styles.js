import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  min-height: 60vh;
  max-width: 50vh;
  margin: 50px auto;
  border-radius: 18px;
  box-shadow: 0 6px 12px #c2c2c2;
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap");
  font-family: "Raleway", sans-serif;
`
export const Title = styled.h1`
  font-size: 21px;
  font-family: "Raleway", sans-serif;
  margin: 30px auto 32px auto;
`
export const Parameters = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  padding: 0 18px 50px 18px;
`
export const Parameter = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  height: 25px;
  box-shadow: 0 1px 3px #c2c2c2;
  padding: 0 8px;
  font-size: 14px;
  background-color: rgba(255, 220, 0, 0.84);
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: #000;
  align-items: center;
  cursor: pointer;
`
export const PasswordOutput = styled.input`
  border: 2px solid rgba(255, 220, 0, 0.84);
  border-radius: 5px;
  box-shadow: 0 1px 3px #c2c2c2;
  text-align: center;
  color: #000;
  background-color: transparent;
  height: 30px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  margin-top: 16px;
  cursor: pointer;
  &&:focus {
    outline: none;
  }
  &&:placeholder-shown {
    font-size: 14px;
    font-weight: 300;
  }
`
export const CharactersInput = styled.input`
  width: 200px;
  border-radius: 5px;
  cursor: pointer;
  -webkit-appearance: none; 
  appearance: none;
  background-color: #007a7e;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    margin-top: -0.25em;
    height: 16px;
    width: 16px;
    border: 0.5px solid #007a7e;
    background: #007a7e;
    border-radius: 100%;
    box-shadow: 0 1px 5px #000000;
  }
  &::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    max-width: 500px;
    outline: none;
    height: 10px;
    border-radius: 10px;
  }
`
export const Checkbox = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  width: 1.3em;
  height: 1.3em;
  border-radius: 0.40em;
  border: 0.15em solid #007a7e;
  outline: none;
  background-color: ${state => state.checked ? '#007a7e' : ''};
  position: relative;
  box-shadow: 0 2px 9px #c2c2c2;
  ::before {
    content: '\u2714';
    font-size: 1.05em;
    color: ${state => state.checked ? '#fff' : 'transparent'};
    position: absolute;
    right: 1px;
    top: -2.5px;
  }
`
export const Form = styled.form`
  display: block;
`
export const Button = styled.button`
  background-color: ${props => props.generate ? '#007a7e' : 'rgba(255, 220, 0, 0.84)'};
  border-radius: 5px;
  border: none;
  height: 35px;
  color: ${props => props.generate ? 'white' : 'black'};
  font-size: 21px;
  font-weight: 700;
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  box-shadow: 0 4px 9px #c2c2c2;
  &:active {
    transform: translateY(0.5px);
    box-shadow: 0 2px 4px #c2c2c2;
  }
`
