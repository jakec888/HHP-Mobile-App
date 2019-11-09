import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import { Text } from 'native-base'

import PAAScreen from './PAAScreen'

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure'

const PAAStackNavigator = createStackNavigator({
  Sent: {
    screen: PAAScreen,
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
          Patient Assistance Application
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

export default PAAStackNavigator
