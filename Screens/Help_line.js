import { View, Text, Image } from 'react-native'
import React from 'react'
import Help from '../assets/help-line.png';


const Help_line = () => {
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
          <Image source={Help} style={{
            height: 30,
            width: 30,
            margin: 5
          }}></Image>
        </View>
        <View>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginTop:'5%'
          }}> Help Line</Text>
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
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
          textAlign: 'center'
        }}>Contact</Text>
        <View style={{
          flexDirection: 'row'
        }}>
          <View style={{
            height: 30,
            width: 30,
            margin: '5%',
            borderRadius: 5,
            backgroundColor: '#000'
          }}>
          </View>
          <View>
            <Text style={{
              marginTop: '30%',
              fontSize: 18,
              fontWeight: 'bold'
            }}>G-mail:</Text>
          </View>
        </View>
        <Text style={{
          marginLeft: '20%',
          fontSize: 18
        }}>sagor15-2367@diu.edu.bd{"\n"}amanullah15-2447@diu.edu.bd</Text>
        <View style={{
          flexDirection: 'row'
        }}>
          <View style={{
            height: 30,
            width: 30,
            margin: '5%',
            borderRadius: 5,
            backgroundColor: '#000'
          }}>

          </View>
          <Text style={{
            marginTop: '6%',
            fontSize: 18,
            fontWeight: 'bold'
          }}>Phone Number :</Text>
        </View>
        <Text style={{
          fontSize: 18,
          marginLeft: '20%'
        }}>O1767211103</Text>
      </View>


    </View>
  )
}

export default Help_line