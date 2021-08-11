import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {ListItem, Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Header from './Header';

//import {addRnm} from './actions/rnm'

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const rnms = useSelector(state => state.rnmReducer.rnmList);
  console.log(rnms);
  const renderItem = ({item}) => (
    <Text>{item.name.name}</Text>
    // <ListItem
    //   title={item.name.name}
    //   bottomDivider
    //   rightIcon={<Icon name="rowing" />}
    //   // rightIcon={<Icon name="delete" size={16} />}
    // />
  );

  return (
    <FlatList
      style={styles.listContainer}
      data={rnms}
      keyExtractor={item => {
        item.key;
      }}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#212121',
    padding: 16,
  },
  listText: {
    fontSize: 30,
  },
});

export default HistoryScreen;
