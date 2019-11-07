import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Ionicons } from '@expo/vector-icons'

import Page1StackNavigator from '../screens/Page1/Page1StackNavigator'
import Page2StackNavigator from '../screens/Page2/Page2StackNavigator'

const AppDrawerNavigator = createDrawerNavigator(
  {
    Page1: {
      screen: Page1StackNavigator,
      navigationOptions: {
        drawerLabel: 'Page 1',
        drawerIcon: <Ionicons name="md-mail-open" size={24} color="#3f51b5" />
      }
    },
    Page2: {
      screen: Page2StackNavigator,
      navigationOptions: {
        drawerLabel: 'Page 2',
        drawerIcon: <Ionicons name="md-send" size={24} color="#3f51b5" />
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: '#1f285a',
      labelStyle: {
        color: '#3f51b5'
      }
    }
  }
)

export default createAppContainer(AppDrawerNavigator)