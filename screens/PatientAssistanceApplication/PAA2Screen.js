import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Container, Content, Form, Item, Picker } from "native-base";

import { updateApplicant } from "../../redux/actions/ppa.actions";

export class PAA2Screen extends Component {
  onChangeApplicant = applicant => {
    this.props.updateApplicant(applicant);
  };

  onSubmitUserData = event => {
    // action prop to submit form
    this.props.navigation.navigate("Part3");
  };

  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Applicant"
                placeholderStyle={{ color: "#1B6FF0" }}
                placeholderIconColor="#1B6FF0"
                selectedValue={this.props.applicant}
                onValueChange={this.onChangeApplicant}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
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
  applicant: state.PPA.applicant
});

const mapDispatchToProps = {
  updateApplicant: updateApplicant
};

export default connect(mapStateToProps, mapDispatchToProps)(PAA2Screen);
