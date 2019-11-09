import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import {
  View,
  Text,
} from 'native-base'

import PatientAssistanceForm from './PAAForm';

export class Page2Screen extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <Text>Page 2</Text>
        <PatientAssistanceForm />
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
)(Page2Screen)
