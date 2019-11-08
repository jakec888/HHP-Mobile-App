import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { View, Text, } from 'native-base'

export class PatientAssistanceApplicationScreen extends Component {
  
  render () {
    return (
      <View style={styles.container}>
      <Text>Patient Assistance Application</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientAssistanceApplicationScreen)
