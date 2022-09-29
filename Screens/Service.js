import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Ima from '../assets/service.png';


const Service = () => {
  return (
    <ScrollView>
      <View style={{
        flexDirection: 'row',
        height: 50,
        width: 150,
        backgroundColor: 'white',
        marginLeft: '30%',
        marginTop: '15%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 15,

      }}>
        <View>
          <Image source={Ima}></Image>
        </View>
        <View>
          <Text style={{
            fontSize: 20,
            marginTop: '15%'

          }}>Service</Text>
        </View>
      </View>

    </ScrollView>
  )
}

export default Service
