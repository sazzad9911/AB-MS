import { View, Text, TextInput, Dimensions, StyleSheet } from 'react-native'
import React from 'react';
import Press_Button from '../Components/Press_Button';

const Register = ({navigation}) => {
  return (
    <View style={styles.containers}>
      <TextInput style={styles.TextStyle} placeholder='Fast Name'></TextInput>
      <TextInput style={styles.TextStyle} placeholder='Last Name'></TextInput>
      <TextInput style={styles.TextStyle} placeholder='Phone Number'></TextInput>
      <TextInput style={styles.TextStyle} placeholder='Email'></TextInput>
      <TextInput style={styles.TextStyle} placeholder='Password'></TextInput>
      <View style={styles.buttonR}>
      <Press_Button title='Ragister' onPress={() => navigation.navigate("RegisterButton")} /> 
      </View>
    </View> 
  )
}

export default Register

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  containers: {
    marginTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'15%'
  },
  TextStyle: {
    width: width - 50,
    margin: 10,
    backgroundColor: '#DAD6D6',
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 10,
    borderWidth: 0.5

  },
  buttonR:{
    marginTop:'20%'
  }
});
