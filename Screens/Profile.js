import { View, Text, Image, } from 'react-native'
import React from 'react'
import Ima from '../assets/profile.png';
import Img from '../assets/sagor.jpg'

const Profile = () => {
  return (
    <View>
      <View style={{
        height: '5%',
        width: '24%',
        backgroundColor: 'white',
        marginLeft: '40%',
        marginTop: '10%',
        borderRadius: 5,
        flexDirection: 'row'

      }}>
        <View>
          <Image source={Ima} style={{
            height: 20,
            width: 20,
            borderRadius: 5,
            margin: 4
          }}></Image>
        </View>
        <View>
          <Text style={{
            fontSize: 20,
          }}>Profile</Text>
        </View>
      </View>

      <View style={{
        height: '20%',
        width: '30%',
        backgroundColor: 'white',
        marginLeft: '38%',
        marginTop: '3%',
        borderRadius: 50
      }}>
        <Image source={Img} style={{
          height: '100%',
          width: '100%',
          borderRadius: 50
        }}></Image>
      </View>
      <Text style={{
        textAlign: 'center',
        marginTop: '5%'
      }}>Name : Md Sagor alam{"\n"} Email/Phone : sagor15-2367@diu.edu.bd{"\n"}
        Address : Pirgachha, Rangpur</Text>
        <View style={{
          height:'40%',
          width:'90%',
          backgroundColor:'white'
        }}>

        </View>
    </View>



  )
}

export default Profile

/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  */