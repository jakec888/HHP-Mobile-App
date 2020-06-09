import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    width: '95%',
  },
  input: {
    borderColor: '#1B6FF0',
  },
  label: {
    color: '#1B6FF0',
  },
  buttonContainer: {
    margin: '5%',
  },
  button: {
    borderColor: '#1B6FF0',
    color: '#1B6FF0',
    alignSelf: 'center',
    width: '50%',
  },
  buttonText: {
    color: '#1B6FF0',
  },
});

function PAA1Form(props) {
  return (
    <Container>
      <Content style={styles.container}>
        <Form>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.label}>Email</Label>
            <Input
              style={{color: '#1B6FF0'}}
              autoCapitalize="none"
              onChangeText={props.onChangeEmail}
              value={props.email}
            />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.label}>First Name</Label>
            <Input
              style={{color: '#1B6FF0'}}
              autoCapitalize="none"
              onChangeText={props.onChangeFirstName}
              value={props.first_name}
            />
          </Item>
          <Item floatingLabel style={styles.input}>
            <Label style={styles.label}>Last Name</Label>
            <Input
              style={{color: '#1B6FF0'}}
              autoCapitalize="none"
              onChangeText={props.onChangeLastName}
              value={props.last_name}
            />
          </Item>
          <View style={styles.buttonContainer}>
            <Button
              primary
              full
              bordered
              rounded
              style={styles.button}
              onPress={props.onSubmitUserData}>
              <Text style={styles.buttonText}>Next</Text>
            </Button>
          </View>
        </Form>
      </Content>
    </Container>
  );
}

export default PAA1Form;
