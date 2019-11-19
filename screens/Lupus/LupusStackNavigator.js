import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'

import { Title, View } from 'native-base'

import LupusScreen from './LupusScreen'

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure'

const LupusStackNavigator = createStackNavigator({
    Lupus: {
        screen: LupusScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: (
                <View>
                    <Title
                        style={{
                            flex: 1,
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >
                        Lupus
                    </Title>
                </View>
            ),
            ...Platform.select({
                ios: {
                    headerLeft: (
                        <NavigationDrawerStructure
                            navigationProps={navigation}
                        />
                    ),
                },
                android: {},
            }),
            headerStyle: {
                backgroundColor: '#1B6FF0',
            },
            headerTintColor: '#fff',
        }),
    },
})

export default LupusStackNavigator
