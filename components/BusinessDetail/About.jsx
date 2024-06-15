import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function About({ business }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.description}>{business?.About}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#FFF",
  },
  title: {
    fontFamily: 'outfit-bold',
    fontSize: 20,
  },
  description: {
    fontFamily: 'outfit',
    lineHeight: 25,
  },
});
