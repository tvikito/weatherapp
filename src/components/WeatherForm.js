import React from 'react'
import styled from 'styled-components';

import Button from './styled/Button';
import Form from './styled/form/Form';
import Input from './styled/form/Input';

import useForm from '../customHooks/useForm';

const WeatherFormForm = styled(Form)`
  display:flex;
  flex-direction:row;
  margin: 20px auto 0;
`;

const WeatherFormInput = styled(Input)`
  font-weight: bold;
  flex-grow:2;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 14px;
  border: 2px solid #f37021;
  border-right: none;
  font-size: 15px;
`;

const WeatherFormButton = styled(Button)`
  font-weight: bold;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin: 0;
  font-size: 15px;
`;

const WeatherForm = (props) => {
  const { input, handleInputChange, handleSubmit } = useForm(submitAction);  

  function submitAction() {
    props.onFormSubmit(input);
  }

  return (
    <WeatherFormForm onSubmit={handleSubmit}>
      <WeatherFormInput type="text" value={input} onChange={handleInputChange} placeholder="Enter your city" required/>
      <WeatherFormButton primary type="submit" value="Submit">Submit</WeatherFormButton>
    </WeatherFormForm>
  );
}

export default WeatherForm;