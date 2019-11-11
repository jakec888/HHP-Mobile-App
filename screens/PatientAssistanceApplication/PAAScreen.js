import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
    Picker,
    Icon,
} from 'native-base'

import {
    updateEmail,
    updateFirstName,
    updateLastName,
    updateApplicant,
} from '../../redux/actions/ppa.actions'

export class PAAScreen extends Component {
    onChangeEmail = text => {
        this.props.updateEmail(text)
    }

    onChangeFirstName = text => {
        this.props.updateFirstName(text)
    }

    onChangeLastName = text => {
        this.props.updateLastName(text)
    }

    onChangeApplicant = applicant => {
        this.props.updateApplicant(applicant)
    }

    onSubmitUserData = event => {
        // action prop to submit form
    }

    render() {
        return (
            <Container>
                <Content style={styles.container}>
                    <Form>
                        <Item floatingLabel style={styles.input}>
                            <Label style={styles.label}>Email</Label>
                            <Input
                                autoCapitalize="none"
                                onChangeText={this.onChangeEmail}
                            />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            {/* <Label style={styles.label}>
                                Who is completing this application?
                            </Label>
                            <Input
                                placeholder="Caregiver/Caregiver"
                                autoCapitalize="none"
                                onChangeText={this.onChangeEmail}
                            /> */}
                            <Label style={styles.label}>
                                Who is completing this application?
                            </Label>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                // style={{ width: undefined }}
                                // placeholder="Who is filling application?"
                                // placeholderStyle={{ color: '#1B6FF0' }}
                                // placeholderIconColor="#1B6FF0"
                                selectedValue={this.props.applicant}
                                onValueChange={this.onChangeApplicant}
                            >
                                <Picker.Item label="Patient" value="Patient" />
                                <Picker.Item
                                    label="Caregiver"
                                    value="Caregiver"
                                />
                                <Picker.Item
                                    label="Family Member"
                                    value="Family Member"
                                />
                                <Picker.Item label="Friend" value="Friend" />
                            </Picker>
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
                                <Text style={styles.buttonText}>Submit</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
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
})

const mapStateToProps = state => ({
    email: state.PPA.email,
    first_name: state.PPA.first_name,
    last_name: state.PPA.last_name,
    applicant: state.PPA.applicant,
})

const mapDispatchToProps = {
    updateEmail: updateEmail,
    updateFirstName: updateFirstName,
    updateLastName: updateLastName,
    updateApplicant: updateApplicant,
}

export default connect(mapStateToProps, mapDispatchToProps)(PAAScreen)
