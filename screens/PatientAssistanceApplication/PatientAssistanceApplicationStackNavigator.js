import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import { Text } from 'native-base'

import PatientAssistanceApplicationScreen from './PatientAssistanceApplicationScreen'

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure'

const PatientAssistanceApplicationStackNavigator = createStackNavigator({
  Sent: {
    screen: PatientAssistanceApplicationScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          Page 1
        </Text>
      ),
      ...Platform.select({
        ios: {
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
        },
        android: {}
      }),
      headerStyle: {
        backgroundColor: '#1B6FF0'
      },
      headerTintColor: '#fff'
    })
  }
})

export default PatientAssistanceApplicationStackNavigator
