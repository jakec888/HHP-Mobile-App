import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Ionicons} from '@expo/vector-icons';

import PAAScreen from '../screens/PatientAssistanceApplication/PAAScreen';
import Page2StackNavigator from '../screens/Page2/Page2StackNavigator';

import SideBarHeader from './SideBarHeader';

const AppDrawerNavigator = createDrawerNavigator(
  {
    PAA: {
      screen: PAAScreen,
      navigationOptions: {
        drawerLabel: 'Patient Assistance',
        drawerIcon: <Ionicons name="md-mail-open" size={24} color="#1B6FF0" />,
      },
    },
    Page2: {
      screen: Page2StackNavigator,
      navigationOptions: {
        drawerLabel: 'Page 2',
        drawerIcon: <Ionicons name="md-send" size={24} color="#1B6FF0" />,
      },
    },
  },
  {
    contentComponent: props => <SideBarHeader {...props} />,
    contentOptions: {
      activeTintColor: '#1B6FF0',
      labelStyle: {
        color: '#1B6FF0',
      },
    },
  },
);

export default createAppContainer(AppDrawerNavigator);
