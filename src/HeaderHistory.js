import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function HeaderHistory() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Clicked Characters</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 20,
    backgroundColor: '#D8AAF6',
  },
  title: {
    textAlign: 'center',
    color: '#310759',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
