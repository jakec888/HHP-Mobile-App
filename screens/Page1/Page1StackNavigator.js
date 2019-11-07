import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import { Text } from 'native-base'

import Page1Screen from './Page1Screen'

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure'

const Page1StackNavigator = createStackNavigator({
  Sent: {
    screen: Page1Screen,
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

export default Page1StackNavigator
