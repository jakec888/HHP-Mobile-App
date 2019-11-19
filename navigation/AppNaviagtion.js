import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import PAAStackNavigator from '../screens/PatientAssistanceApplication/PAAStackNavigator'
import LupusStackNavigator from '../screens/Lupus/LupusStackNavigator'

import SideBarHeader from './SideBarHeader'

const AppDrawerNavigator = createDrawerNavigator(
    {
        PAA: {
            screen: PAAStackNavigator,
            navigationOptions: {
                drawerLabel: 'Assistance Application',
            },
        },
        Lupus: {
            screen: LupusStackNavigator,
            navigationOptions: {
                drawerLabel: 'Lupus',
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
    }
)

export default createAppContainer(AppDrawerNavigator)
