import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addRnm} from './actions/rnm';
import Header from './Header';

const Tab = createMaterialTopTabNavigator();

const CurrentScreen = () => {
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character').then(response => {
      //debugger;
      item = response.data.results;
      setRandm(item);
    }, []);
  });

  const [rnm, setRnm] = useState('');
  const dispatch = useDispatch();
  const submitRnm = rnm => dispatch(addRnm(rnm));

  const [randm, setRandm] = useState([]);

  const onPress = rnm => {
    //WRONGGGG
    // console.log('pressed');
    //setRnm('Jay pressed');
    setRnm(rnm);
    submitRnm(rnm);
    //setRnm('Jay pressed');
  };
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={{
        //flex: 1,
        height: 80,
        marginBottom: 10,

        //backgroundColor: 'pink',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'grey',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            marginLeft: 5,
            marginBottom: 5,
            marginRight: 15,
          }}>
          <Image style={styles.tinyLogo} source={{uri: item.image}} />
        </View>
        <View>
          <Text style={styles.titleStyle}>Name : {item.name}</Text>
          <Text>Species: {item.species}</Text>
          <Text>Gender: {item.gender}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <Header />
      <View style={{marginTop: 10}}>
        <FlatList renderItem={renderItem} data={randm} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
  titleStyle: {
    color: '#24282E',
    fontSize: 16,
    //width: '70%',
    marginLeft: '0.5%',
    marginTop: '0.5%',
    fontWeight: 'bold',
    marginTop: 2,
    marginBottom: 5,
  },
  textStyle: {
    color: '#3B3E43',
    fontSize: 14,
  },
});
// const mapStateToProps = state => {
//   return {
//     rnm: state.rnmReducer.rnmList,
//   };
// };
// const mapDispatchToProps = state => {
//   return {
//     add: rnm => dispatch(addRnm(rnm)),
//   };
// };
//connect(mapStateToProps, mapDispatchToProps)
export default CurrentScreen;
