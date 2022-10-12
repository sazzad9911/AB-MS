import { View, Text, Image } from 'react-native'
import React from 'react'
import Abouts from '../assets/About.png';


const About = () => {
  return (
    <View style={{
      height: '100%',
      width: '100%',
      margin: '1%',
      padding: '1%',
      alignItems: 'center'

    }}>
      <View style={{
        height: '6%',
        width: '36%',
        backgroundColor: 'white',
        borderRadius: 5,
        marginTop: '10%',
        flexDirection: 'row',


      }}>
        <View>
          <Image source={Abouts} style={{
            height: 30,
            width: 30,
            margin: 5
          }}></Image>
        </View>
        <View>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginTop:'15%'
          }}> About</Text>
        </View>
      </View>

      <View style={{
        height: '60%',
        width: '90%',
        margin: '4%',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        elevation: 5

      }}>

      </View>
      
    </View>
  )
}

export default About