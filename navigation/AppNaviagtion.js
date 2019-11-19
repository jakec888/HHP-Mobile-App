import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import PAAStackNavigator from '../screens/PatientAssistanceApplication/PAAStackNavigator';
import AboutUsStackNavigator from '../screens/AboutUs/AboutUsStackNavigator';
import LupusStackNavigator from '../screens/Lupus/LupusStackNavigator';
import MigraineStackNavigator from '../screens/Migraine/MigraineStackNavigator';

import SideBarHeader from './SideBarHeader';

const AppDrawerNavigator = createDrawerNavigator(
  {
    PAA: {
      screen: PAAStackNavigator,
      navigationOptions: {
        drawerLabel: 'Assistance Application',
      },
    },
    AboutUs: {
      screen: AboutUsStackNavigator,
      navigationOptions: {
        drawerLabel: 'About Us',
      },
    },
    Lupus: {
      screen: LupusStackNavigator,
      navigationOptions: {
        drawerLabel: 'Lupus',
      },
    },
    Migraine: {
      screen: MigraineStackNavigator,
      navigationOptions: {
        drawerLabel: 'Migraine',
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
