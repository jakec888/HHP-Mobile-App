import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
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

import { updateName } from '../../redux/actions/ppa.actions'

export class PAAScreen extends Component {
  onChangeName = text => {
    this.props.updateName(text);
  };

  onSubmitUserData = event => {
    // action prop to submit form
  };

  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Name</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeName} />
            </Item>
            <View style={styles.buttonContainer}>
              <Button
                primary
                full
                bordered
                rounded
                style={styles.button}
                onPress={this.onSubmitUserData}>
                <Text style={styles.buttonText}>Submit</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

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

const mapStateToProps = state => ({
  name: state.PPA.name
});

const mapDispatchToProps = {
  updateName: updateName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PAAScreen);
