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

function WhatIsLupus() {
   return (
      <ScrollView>
         <Container style={styles.container}>
            <H2 style={styles.title}>What is Lupus?</H2>
            <Text style={styles.text}>
               Lupus is a systemic autoimmune disease that occurs when the
               body’s immune system attacks its own tissues and organs.
               Inflammation caused by lupus can damage many different parts of
               the body including the joints, skin, kidneys, blood cells, brain,
               heart, and lungs.
            </Text>
            <Text style={styles.text}>There are several types of lupus:</Text>
            <View style={styles.text}>
               <Text style={styles.bullet}>
                  {'\u2027'} Systemic lupus erythematosus (SLE) is the most
                  common type. It can be mild or severe and can affect many
                  parts of the body.
               </Text>
               <Text style={styles.bullet}>
                  {'\u2027'} Cutaneous lupus can be categorized into three main
                  forms: chronic cutaneous lupus (CCLE), subacute cutaneous
                  lupus (SCLE) and acute cutaneous lupus (ACLE).
               </Text>
               <Text style={styles.bullet}>
                  {'\u2027'} Drug-induced lupus is caused by certain
                  prescription drugs.
               </Text>
               <Text style={styles.bullet}>
                  {'\u2027'} Neonatal lupus is a rare type of lupus that affects
                  newborns. It is caused by the transfer of lupus antibodies
                  from the mother who has lupus to the fetus.
               </Text>
            </View>
            <Text style={styles.text}>
               Lupus can be difficult to diagnose because its signs and symptoms
               can be vague, and often mimic those of other conditions. Lupus is
               more common in women of childbearing age; however, men, children,
               and teenagers can develop lupus as well. The disease can affect
               all ages, but people with lupus usually develop the disease
               between the ages of 15-44.
            </Text>
            <Text style={styles.text}>
               Researchers believe that lupus develops in response to a
               combination of factors both inside and outside the body,
               including hormones, genetics, and environment. It appears that
               people with an inherited predisposition for lupus may develop the
               disease when they are exposed to something in the environment
               that can trigger lupus. The cause of lupus in most cases,
               however, is unknown.
            </Text>
         </Container>
      </ScrollView>
   );
}

export default WhatIsLupus;
