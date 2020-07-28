import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';
import {Title, Subtitle, View} from 'native-base';

import PAA1Screen from './PAA1Screen';
import PAA2Screen from './PAA2Screen';
import PAA3Screen from './PAA3Screen';

import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';

const PAAStackNavigator = createStackNavigator(
   {
      Part1: {
         screen: PAA1Screen,
         navigationOptions: ({navigation}) => ({
            headerTitle: (
               <View>
                  <Title
                     style={{
                        flex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                     }}>
                     Patient Application
                  </Title>
                  <Subtitle
                     style={{
                        flex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                     }}>
                     (1 of 3)
                  </Subtitle>
               </View>
            ),
            ...Platform.select({
               ios: {
                  headerLeft: (
                     <NavigationDrawerStructure navigationProps={navigation} />
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
      Part2: {
         screen: PAA2Screen,
         navigationOptions: ({navigation}) => ({
            headerTitle: (
               <View>
                  <Title
                     style={{
                        flex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                     }}>
                     Patient Application
                  </Title>
                  <Subtitle
                     style={{
                        flex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                     }}>
                     (2 of 3)
                  </Subtitle>
               </View>
            ),
            ...Platform.select({
               ios: {
                  headerLeft: (
                     <NavigationDrawerStructure navigationProps={navigation} />
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
      Part3: {
         screen: PAA3Screen,
         navigationOptions: ({navigation}) => ({
            headerTitle: (
               <View>
                  <Title
                     style={{
                        flex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                     }}>
                     Patient Application
                  </Title>
                  <Subtitle
                     style={{
                        flex: 1,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                     }}>
                     (3 of 3)
                  </Subtitle>
               </View>
            ),
            ...Platform.select({
               ios: {
                  headerLeft: (
                     <NavigationDrawerStructure navigationProps={navigation} />
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
   },
   {headerLayoutPreset: 'center'},
);

export default PAAStackNavigator;
