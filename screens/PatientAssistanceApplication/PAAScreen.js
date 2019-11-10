import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { View, Text} from 'native-base'

export class PAAScreen extends Component {
  
  render () {
    return (
      <View style={styles.container}>
        <Text>Working!</Text>
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
