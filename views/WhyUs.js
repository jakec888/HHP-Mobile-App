import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Container, Text, H2} from 'native-base';

const styles = StyleSheet.create({
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
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
  img: {
    width: 50,
    height: 50,
  },
});

function WhyUs() {
  return (
    <ScrollView>
      <Container style={styles.container}>
        <H2 style={styles.title}>Community</H2>
        <Text style={styles.text}>
          Human Health Project (HHP) is a growing community of patients,
          caregivers, health advocates, donors, and volunteers. HHP was created
          “of the people, by the people, and for the people.” Listening to the
          community is central to our mission, and we value communication and
          the exchange of information in all that we do.
        </Text>
        <H2 style={styles.title}>Stakeholders</H2>
        <Text style={styles.text}>
          Our primary stakeholders are individuals struggling with health issues
          and seeking unbiased information, education, and support for
          themselves and those in their care.
        </Text>
        <H2 style={styles.title}>Local & Global</H2>
        <Text style={styles.text}>
          We realize achieving long-term success requires sacrifice, innovation,
          and sustained effort. To maximize our impact, we hold ourselves
          accountable to our local communities with whom we strive to achieve
          meaningful and measurable outcomes.
        </Text>
      </Container>
    </ScrollView>
  );
}

export default WhyUs;
