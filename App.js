import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from './src/Header';
import HistoryScreen from './src/HistoryScreen';
import CurrentScreen from './src/CurrentScreen';
import FormScreen from './src/FormScreen';
import {NavigationContainer} from '@react-navigation/native';
// import axios from 'axios';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function App() {
  //const [errorMessage, setErrorMessage] = useState('');
  return (
    <NavigationContainer>
      <Tab.Navigator style={{marginTop: 10}}>
        <Tab.Screen name="Current" component={CurrentScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Form" component={FormScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
