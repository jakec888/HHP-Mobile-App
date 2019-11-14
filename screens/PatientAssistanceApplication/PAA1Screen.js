import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";

import {
  updateEmail,
  updateFirstName,
  updateLastName
} from "../../redux/actions/ppa.actions";

export class PAA1Screen extends Component {
  onChangeEmail = email => {
    this.props.updateEmail(email);
  };

  onChangeFirstName = first_name => {
    this.props.updateFirstName(first_name);
  };

  onChangeLastName = last_name => {
    this.props.updateLastName(last_name);
  };

  onSubmitUserData = event => {
    // action prop to submit form
    this.props.navigation.navigate("Part2");
  };

  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Email</Label>
              <Input autoCapitalize="none" onChangeText={this.onChangeEmail} />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>First Name</Label>
              <Input
                autoCapitalize="none"
                onChangeText={this.onChangeFirstName}
              />
            </Item>
            <Item floatingLabel style={styles.input}>
              <Label style={styles.label}>Last Name</Label>
              <Input
                autoCapitalize="none"
                onChangeText={this.onChangeLastName}
              />
            </Item>
            <View style={styles.buttonContainer}>
              <Button
                primary
                full
                bordered
                rounded
                style={styles.button}
                onPress={this.onSubmitUserData}
              >
                <Text style={styles.buttonText}>Go To Part 2</Text>
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
    width: "95%"
  },
  input: {
    borderColor: "#1B6FF0"
  },
  label: {
    color: "#1B6FF0"
  },
  buttonContainer: {
    margin: "5%"
  },
  button: {
    borderColor: "#1B6FF0",
    color: "#1B6FF0",
    alignSelf: "center",
    width: "50%"
  },
  buttonText: {
    color: "#1B6FF0"
  }
});

const mapStateToProps = state => ({
  email: state.PPA.email,
  first_name: state.PPA.first_name,
  last_name: state.PPA.last_name
});

const mapDispatchToProps = {
  updateEmail: updateEmail,
  updateFirstName: updateFirstName,
  updateLastName: updateLastName
};

export default connect(mapStateToProps, mapDispatchToProps)(PAA1Screen);
