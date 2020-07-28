import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
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
} from 'native-base';

const styles = StyleSheet.create({
   container: {
      width: '100%',
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
      margin: '5%',
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

function PAA2Form(props) {
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
                                 <Icon
                                    name="arrow-back"
                                    style={{color: '#fff'}}
                                 />
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
                     selectedValue={props.applicant}
                     onValueChange={props.onChangeApplicant}>
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
                                 <Icon
                                    name="arrow-back"
                                    style={{color: '#fff'}}
                                 />
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
                     selectedValue={props.age}
                     onValueChange={props.onChangeAgeRange}>
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
                                 <Icon
                                    name="arrow-back"
                                    style={{color: '#fff'}}
                                 />
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
                     selectedValue={props.reference}
                     onValueChange={props.onChangeReference}>
                     <Picker.Item
                        label="Healthcare Practitioner"
                        value="Healthcare Practitioner"
                     />
                     <Picker.Item label="Friend/Family" value="Friend/Family" />
                     <Picker.Item
                        label="Internet Search"
                        value="Internet Search"
                     />
                     <Picker.Item label="Other" value="Other" />
                  </Picker>
               </Item>
               <Item picker>
                  <Picker
                     renderHeader={backAction => (
                        <Header style={{backgroundColor: '#1B6FF0'}}>
                           <Left>
                              <Button transparent onPress={backAction}>
                                 <Icon
                                    name="arrow-back"
                                    style={{color: '#fff'}}
                                 />
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
                     selectedValue={props.location}
                     onValueChange={props.onChangeLocation}>
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
               <Item picker>
                  <Picker
                     renderHeader={backAction => (
                        <Header style={{backgroundColor: '#1B6FF0'}}>
                           <Left>
                              <Button transparent onPress={backAction}>
                                 <Icon
                                    name="arrow-back"
                                    style={{color: '#fff'}}
                                 />
                              </Button>
                           </Left>
                           <Body style={{flex: 3}}>
                              <Title style={{color: '#fff'}}>Service</Title>
                           </Body>
                           <Right />
                        </Header>
                     )}
                     mode="dropdown"
                     textStyle={{color: '#1B6FF0'}}
                     placeholder="What type of service are you requesting?"
                     placeholderStyle={{color: '#1B6FF0'}}
                     note={false}
                     selectedValue={props.service}
                     onValueChange={props.onChangeService}>
                     <Picker.Item
                        label="Patient Advocate"
                        value="Patient Advocate"
                     />
                     <Picker.Item
                        label="Peer Navigator"
                        value="Peer Navigator"
                     />
                     <Picker.Item label="Not Sure" value="Not Sure" />
                  </Picker>
               </Item>
               <Item picker>
                  <Picker
                     renderHeader={backAction => (
                        <Header style={{backgroundColor: '#1B6FF0'}}>
                           <Left>
                              <Button transparent onPress={backAction}>
                                 <Icon
                                    name="arrow-back"
                                    style={{color: '#fff'}}
                                 />
                              </Button>
                           </Left>
                           <Body style={{flex: 3}}>
                              <Title style={{color: '#fff'}}>Issue</Title>
                           </Body>
                           <Right />
                        </Header>
                     )}
                     mode="dropdown"
                     textStyle={{color: '#1B6FF0'}}
                     placeholder="What does your issue pertain to?"
                     placeholderStyle={{color: '#1B6FF0'}}
                     note={false}
                     selectedValue={props.issue}
                     onValueChange={props.onChangeIssue}>
                     <Picker.Item
                        label="Diagnosed Health Condition"
                        value="Diagnosed Health Condition"
                     />
                     <Picker.Item
                        label="Undiagnosed Health Condition"
                        value="Undiagnosed Health Condition"
                     />
                     <Picker.Item label="New Diagnosis" value="New Diagnosis" />
                     <Picker.Item
                        label="Health Insurance/Financial"
                        value="Health Insurance/Financial"
                     />
                     <Picker.Item
                        label="Legal Assistance"
                        value="Legal Assistance"
                     />
                     <Picker.Item label="Other" value="Other" />
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
                     onPress={props.onGoBack}>
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
                     onPress={props.onSubmitUserData}>
                     <Text style={styles.buttonText}>Next</Text>
                  </Button>
               </View>
            </View>
         </Content>
      </Container>
   );
}

export default PAA2Form;
