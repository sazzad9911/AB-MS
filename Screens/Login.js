
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Press_Button from '../Components/Press_Button'
import { Button } from 'react-native-web'


export default function Login({ navigation, onPress }) {
  return (
    <View style={styles.Icontainer}>
      <View style={styles.Lprofile}>

      </View>
      <View style={styles.LBody}>
        <TextInput style={styles.TextStyle} placeholder='Email'></TextInput>
        <TextInput style={styles.TextStyle} placeholder='Password'></TextInput>
      </View>
      <View style={styles.buttonR}>
        <Press_Button title='LogIn' onPress={() => navigation.navigate("StayScreen2")} />
      </View>
      <View style={styles.ForgoteP}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.texts}>Forgotten Password</Text>
          <View style={styles.under}></View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  Icontainer: {
    backgroundColor:'green',
    marginTop: '35%',
    justifyContent: 'center',
    padding:'5%',
    alignItems: 'center',
    display: 'flex'

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
  Lprofile: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#5E84B3',
    marginTop: 40
  },
  under: {
    width: 130,
    height: 2,
    backgroundColor: 'black',
    marginTop:2
  },
  ForgoteP: {
    marginTop:'35%',
    marginLeft:'60%'
  },
  texts: {
    color: '#3B4F50'
  },
  LBody: {
    marginTop: 20
  }
}
)

