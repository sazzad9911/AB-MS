
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Press_Button from '../Components/Press_Button'
import Logo from '../assets/Logo.png'



export default function Login({ navigation, onPress }) {
  return (
    <View style={styles.Icontainer}>
      <View style={styles.Lprofile}>
        <Image source={Logo} style={styles.StayImage}></Image>
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
    marginTop: '35%',
    justifyContent: 'center',
    padding: '5%',
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
    height: 130,
    width: 130,
    borderRadius: 65,
    backgroundColor: '#fff',
    marginTop: '7%',
    justifyContent:'center',
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 10,
  },
  under: {
    width: 136,
    height: 2,
    backgroundColor: '#fff',
    marginTop: 2,
    marginLeft: -5,
  },
  ForgoteP: {
    marginTop: '35%',
    marginLeft: '60%'
  },
  /*
  #3B4F50
  */
  texts: {
    color: '#fff'
  },
  LBody: {
    marginTop: 20
  },
  StayImage: {
    width: 80,
    height: 140,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3, },
    shadowOpacity: 15,
    shadowRadius: 5,
    elevation: 15,
  }
}
)

