import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import { Text } from 'native-base'

import Page2Screen from './Page2Screen'

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure'

const Page2StackNavigator = createStackNavigator({
  Sent: {
    screen: Page2Screen,
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
          Page 2
        </Text>
      ),
      ...Platform.select({
        ios: {
          headerLeft: <NavigationDrawerStructure navigationProps={navigation} />
        },
        android: {}
      }),
      headerStyle: {
        backgroundColor: '#3f52b5'
      },
      headerTintColor: '#fff'
    })
  }
})

export default Page2StackNavigator
