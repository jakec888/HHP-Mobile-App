import React from 'react';
import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {Container, Text, H2} from 'native-base';

function AboutUs() {
  return (
    <ScrollView>
      <Container style={styles.container}>
        <H2 style={styles.title}>Our Story</H2>
        <Text style={styles.text}>
          Human Health Project‘s (HHP) foundation is built upon peer-to-peer
          health information, education, and support. Through our programs, our
          objective is to empower individuals locally and globally to manage
          their health.
        </Text>
        <Text style={styles.text}>
          HHP was founded in 2002 by Dr. Phil Harrington who had spent three
          years trying to find a diagnosis which sparked the idea for HHP. Today
          we are made up of a small core staff with 80+ volunteers, 30+ board
          members and advisers, spread around the world.
        </Text>
        <View style={styles.centerItem}>
          <Image
            style={styles.img}
            source={require('../assets/icon-vision.png')}
          />
        </View>
        <H2 style={styles.title}>Our Vision</H2>
        <Text style={styles.text}>
          To be the leading global resource for peer-to-peer health information,
          education, and support.
        </Text>
        <View style={styles.centerItem}>
          <Image
            style={styles.img}
            source={require('../assets/icon-mission.png')}
          />
        </View>
        <H2 style={styles.title}>Our Mission</H2>
        <Text style={styles.text}>
          HHP’s mission is to provide donation based, peer-to-peer programs
          whereby people can help each other with their health issues, reducing
          inequities in health outcomes. HHP has a special focus on the
          underserved and vulnerable population groups, as well as the elderly
          and their caregivers.
        </Text>
        <H2 style={styles.title}>Patient-Centered Healthcare</H2>
        <Text style={styles.text}>
          HHP supports the patient empowerment movement and e-patient
          initiatives. We believe medicine should be participatory, and that
          individuals who are equipped with the most accurate and up-to-date
          health information, education, and support are empowered to make
          informed health decisions for themselves and those in their care.
        </Text>
        <H2 style={styles.title}>Peer-Led Patient Advocacy</H2>
        <Text style={styles.text}>
          Peer-Led patient advocacy is about supporting people who are not being
          heard in the healthcare system, and empowering them to use their right
          of autonomy. Through sharing of information, experiences, and
          resources, advocates inspire patients to have confidence and take
          ownership in their care plan.
        </Text>
        <H2 style={styles.title}>Health Information Access</H2>
        <Text style={styles.text}>
          We believe people have a right to accurate and unbiased information
          about all types of medicines including conventional, alternative and
          Integrative. We believe free access to health information is not a
          privilege, but rather a human right that should be granted to every
          individual regardless of geographic location, social class, or
          financial position.
        </Text>
        <H2 style={styles.title}>
          Local Partnerships & Volunteer Opportunities
        </H2>
        <Text style={styles.text}>
          Our mission transcends borders, and we embrace partnerships with other
          nonprofit organizations. We are primarily volunteer-based and rely on
          local volunteers and partnerships to help us fulfill our mission.
          Through our partnerships and volunteers, we aim to improve the lives
          of the most underserved and vulnerable communities around the world.
        </Text>
      </Container>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  centerItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#1B6FF0',
  },
  container: {
    height: '100%',
    padding: '5%',
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

export default AboutUs;
