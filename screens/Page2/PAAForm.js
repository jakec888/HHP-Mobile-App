import React , { Component } from 'react';
import { Form, Item, Input, Button, Label, Text } from 'native-base';
import { Field,reduxForm } from 'redux-form';

const validate = values => {
  const error= {};
  error.email= '';
  error.name= '';
  var ema = values.email;
  var nm = values.name;
  if(values.email === undefined){
    ema = '';
  }
  if(values.name === undefined){
    nm = '';
  }
  if(ema.length < 8 && ema !== ''){
    error.email= 'too short';
  }
  if(!ema.includes('@') && ema !== ''){
    error.email= '@ not included';
  }
  if(nm.length > 8){
    error.name= 'max 8 characters';
  }
  return error;
};

class PatientAssistanceForm extends Component {
  renderInput = ({ input, label, type, meta: { touched, error, warning } }) => {
    let hasError= false;
    let name = input.name.charAt(0).toUpperCase() + input.name.slice(1)

    if(error !== undefined){
      hasError= true;
    }

    return( 
      <Item error={hasError} floatingLabel>
        <Label>{name}</Label>
        <Input {...input} />
        {hasError ? <Text>{error}</Text> : <Text />}
      </Item>
    )
  }

  render(){
    const { handleSubmit, reset } = this.props;

    return (
      <Form>
        <Field name="email" component={this.renderInput} />
        <Field name="name" component={this.renderInput} />
        <Button block primary onPress= {reset}>
          <Text>Submit</Text>
        </Button>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'PatientAssistanceForm',
  validate
})(PatientAssistanceForm)