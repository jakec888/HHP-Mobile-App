import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {
  Container,
  Content,
  Form,
  Item,
  Picker,
  Button,
  Text,
  Icon,
  Header,
  Body,
  Left,
  Right,
  Title,
  Label,
} from 'native-base';

import {
  updateApplicant,
  updateAgeRange,
  updateLocation,
  updateReference,
} from '../../redux/actions/ppa.actions';

export class PAA2Screen extends Component {
  onChangeApplicant = applicant => {
    this.props.updateApplicant(applicant);
  };

  onChangeAgeRange = age => {
    this.props.updateAgeRange(age);
  };

  onChangeReference = reference => {
    this.props.updateReference(reference);
  };

  onChangeLocation = location => {
    this.props.updateLocation(location);
  };

  onSubmitUserData = event => {
    // action prop to submit form
    this.props.navigation.navigate('Part3');
  };

  render() {
    return (
      <Container>
        <Content style={styles.container}>
          <Form>
            <Item picker>
              <Picker
                renderHeader={backAction => (
                  <Header style={{backgroundColor: '#1B6FF0'}}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{color: '#fff'}} />
                      </Button>
                    </Left>
                    <Body style={{flex: 3}}>
                      <Title style={{color: '#fff'}}>Applicant</Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                textStyle={{color: '#1B6FF0'}}
                placeholder="Who is applying?"
                placeholderStyle={{color: '#1B6FF0'}}
                note={false}
                selectedValue={this.props.applicant}
                onValueChange={this.onChangeApplicant}>
                <Picker.Item label="Patient" value="Patient" />
                <Picker.Item label="Caregiver" value="Caregiver" />
                <Picker.Item label="Family Member" value="Family Member" />
                <Picker.Item label="Friend" value="Friend" />
              </Picker>
            </Item>
            <Item picker>
              <Picker
                renderHeader={backAction => (
                  <Header style={{backgroundColor: '#1B6FF0'}}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{color: '#fff'}} />
                      </Button>
                    </Left>
                    <Body style={{flex: 3}}>
                      <Title style={{color: '#fff'}}>Age</Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                textStyle={{color: '#1B6FF0'}}
                placeholder="How old are you?"
                placeholderStyle={{color: '#1B6FF0'}}
                note={false}
                selectedValue={this.props.age}
                onValueChange={this.onChangeAgeRange}>
                <Picker.Item label="17 or younger" value="17 or younger" />
                <Picker.Item label="18 to 24" value="18 to 24" />
                <Picker.Item label="25 to 34" value="25 to 34" />
                <Picker.Item label="35 to 44" value="35 to 44" />
                <Picker.Item label="45 to 54" value="45 to 54" />
                <Picker.Item label="55 to 64" value="55 to 64" />
                <Picker.Item label="65 to 74" value="65 to 74" />
                <Picker.Item label="75 or older" value="75 or older" />
              </Picker>
            </Item>
            <Item picker>
              <Picker
                renderHeader={backAction => (
                  <Header style={{backgroundColor: '#1B6FF0'}}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{color: '#fff'}} />
                      </Button>
                    </Left>
                    <Body style={{flex: 3}}>
                      <Title style={{color: '#fff'}}>Reference</Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                textStyle={{color: '#1B6FF0'}}
                placeholder="How did you hear about us?"
                placeholderStyle={{color: '#1B6FF0'}}
                note={false}
                selectedValue={this.props.reference}
                onValueChange={this.onChangeReference}>
                <Picker.Item
                  label="Healthcare Practitioner"
                  value="Healthcare Practitioner"
                />
                <Picker.Item label="Friend/Family" value="Friend/Family" />
                <Picker.Item label="Internet Search" value="Internet Search" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
            </Item>
            <Item picker>
              <Picker
                renderHeader={backAction => (
                  <Header style={{backgroundColor: '#1B6FF0'}}>
                    <Left>
                      <Button transparent onPress={backAction}>
                        <Icon name="arrow-back" style={{color: '#fff'}} />
                      </Button>
                    </Left>
                    <Body style={{flex: 3}}>
                      <Title style={{color: '#fff'}}>Location</Title>
                    </Body>
                    <Right />
                  </Header>
                )}
                mode="dropdown"
                textStyle={{color: '#1B6FF0'}}
                placeholder="Where are you located?"
                placeholderStyle={{color: '#1B6FF0'}}
                note={false}
                selectedValue={this.props.location}
                onValueChange={this.onChangeLocation}>
                <Picker.Item
                  label="Greater Belfast, Belfast, NI"
                  value="Greater Belfast, Belfast, NI"
                />
                <Picker.Item
                  label="Greater Dublin, Dublin, IRL"
                  value="Greater Dublin, Dublin, IRL"
                />
                <Picker.Item
                  label="Los Angeles County, Los Angeles, CA"
                  value="Los Angeles County, Los Angeles, CA"
                />
              </Picker>
            </Item>
          </Form>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button
                primary
                full
                bordered
                rounded
                style={styles.buttonBack}
                onPress={() => {
                  this.props.navigation.navigate('Part1');
                }}>
                <Text style={styles.buttonBackText}>Go Back</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                primary
                full
                bordered
                rounded
                style={styles.buttonNextText}
                onPress={this.onSubmitUserData}>
                <Text style={styles.buttonText}>Next</Text>
              </Button>
            </View>
          </View>
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
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    marginLeft: '5%',
    marginTop: '5%',
  },
  buttonNext: {
    borderColor: '#1B6FF0',
    color: '#1B6FF0',
  },
  buttonBack: {
    borderColor: '#ff0000',
    color: '#ff0000',
  },
  buttonNextText: {
    color: '#1B6FF0',
  },
  buttonBackText: {
    color: '#ff0000',
  },
});

const mapStateToProps = state => ({
  applicant: state.PPA.applicant,
  age: state.PPA.age,
  location: state.PPA.location,
  reference: state.PPA.reference,
});

const mapDispatchToProps = {
  updateApplicant: updateApplicant,
  updateAgeRange: updateAgeRange,
  updateLocation: updateLocation,
  updateReference: updateReference,
};

export default connect(mapStateToProps, mapDispatchToProps)(PAA2Screen);
