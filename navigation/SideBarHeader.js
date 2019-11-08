import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { DrawerItems } from 'react-navigation-drawer';

import { Image, StyleSheet, ScrollView, View } from 'react-native';

const CustomeSideBar = (props) => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View 
        style={{
          height: 120,
          width: '100%',
          alignSelf: 'stretch'
        }}
      />
      <Image
        // square
        style={{
          height: 80,
          width: 70,
          position: 'absolute',
          alignSelf: 'center',
          top: 65
        }}
        source={require('../assets/HHP.png')}
      />
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default CustomeSideBar;
