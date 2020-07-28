import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {Platform} from 'react-native';
import {H2, View} from 'native-base';

import AboutUsScreen from './AboutUsScreen';
import NavigationDrawerStructure from '../../navigation/NavigationDrawerStructure';

const AboutUsStackNavigator = createStackNavigator(
   {
      AboutUs: {
         screen: AboutUsScreen,
         navigationOptions: ({navigation}) => ({
            headerTitle: (
               <View>
                  <H2
                     style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white',
                     }}>
                     About Us
                  </H2>
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

export default AboutUsStackNavigator;
