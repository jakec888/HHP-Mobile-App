import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import {Ionicons} from '@expo/vector-icons';

import PAAStackNavigator from '../screens/PatientAssistanceApplication/PAAStackNavigator';

import SideBarHeader from './SideBarHeader';

const AppDrawerNavigator = createDrawerNavigator(
  {
    PAA: {
      screen: PAAStackNavigator,
      navigationOptions: {
        drawerLabel: 'Patient Assistance Application',
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
