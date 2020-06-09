import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Container, Text, H2} from 'native-base';

const styles = StyleSheet.create({
  title: {
    color: '#1B6FF0',
  },
  container: {
    padding: '5%',
    height: '100%',
  },
  text: {
    marginTop: '2%',
    marginBottom: '2%',
  },
  bullet: {
    marginLeft: '10%',
    marginTop: '1%',
    marginBottom: '1%',
  },
});

function WhatIsMigraine() {
  return (
    <ScrollView>
      <Container style={styles.container}>
        <H2 style={styles.title}>What are Migraines?</H2>
        <Text style={styles.text}>
          Migraine is a primary headache disorder characterized by recurrent
          headaches that are moderate to severe. Typically, the headaches affect
          one-half of the head, are pulsating in nature, and last from two to 72
          hours. Associated symptoms may include nausea, vomiting, and
          sensitivity to light, sound, or smell. The pain is generally made
          worse by physical activity. Up to one-third of people have an aura:
          typically a short period of visual disturbance which signals that a
          headache will soon occur. Occasionally, an aura can occur with little
          or no headache following it.
        </Text>
        <Text style={styles.text}>
          Migraines are believed to be due to a mixture of environmental and
          genetic factors. About two-thirds of cases run in families. Changing
          hormone levels may also play a role, as migraines affect slightly more
          boys than girls before puberty and two to three times more women than
          men. The risk of migraines usually decreases during pregnancy. The
          underlying mechanisms are not fully known. It is, however, believed to
          involve the nerves and blood vessels of the brain.
        </Text>
      </Container>
    </ScrollView>
  );
}

export default WhatIsMigraine;
