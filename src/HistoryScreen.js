import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeaderHistory from './HeaderHistory';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const HistoryScreen = () => {
  const dispatch = useDispatch();
  const rnms = useSelector(state => state.rnmReducer.rnmList);

  const renderItem = ({item}) => <Item title={item.name.name} />;

  return (
    <View style={{flex: 1}}>
      <HeaderHistory />
      <FlatList
        style={styles.listContainer}
        data={rnms}
        keyExtractor={item => {
          item.id;
        }}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'white',
    padding: 16,
  },

  item: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: 40,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'grey',
  },
  title: {
    fontSize: 16,
  },
});

export default HistoryScreen;
