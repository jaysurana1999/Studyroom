import * as React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import HeaderForm from './HeaderForm';

export default () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = data => {
    console.log(data.character);
  };

  return (
    <View style={{flex: 1}}>
      <HeaderForm></HeaderForm>
      <View style={styles.container}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder="character's name"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="character"
          rules={{required: true}}
        />

        <Button
          title="Reset"
          onPress={() => {
            reset({
              name: '',
            });
          }}
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  input: {
    backgroundColor: '#E4E5E6',
    marginTop: 20,
    height: 40,
    padding: 10,
    borderRadius: 10,
  },
});
