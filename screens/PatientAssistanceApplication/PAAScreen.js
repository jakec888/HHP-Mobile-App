import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { View, Text} from 'native-base'

// import PatientAssistanceForm from './PAAForm';
import SimpleForm from "./SimpleForm";
// import showResults from "./showResults";

export class PAAScreen extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        {/* <Text>Sup!</Text> */}
        {/* <PatientAssistanceForm /> */}
        {/* <SimpleForm onSubmit={showResults} /> */}
        <SimpleForm />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '95%'
  }
});

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PAAScreen)
