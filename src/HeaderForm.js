import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HeaderForm() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Who's your favourite character?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 20,
    backgroundColor: '#85C3B5',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
