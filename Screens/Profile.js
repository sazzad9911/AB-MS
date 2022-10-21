import { View, Text, Image, } from 'react-native'
import React from 'react'
import Ima from '../assets/profile.png';
import Img from '../assets/sagor.jpg'
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => {
  return (
    <View>
      <View style={{
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
        width:'35%',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginLeft:'35%',
        marginTop:'10%',
        marginBottom:'3%'
      }}>
        <View style={{
          paddingVertical:'6%'
        }}>
          <Image source={Ima} style={{
            height: 20,
            width: 20,
          }}></Image>
        </View>
        <View style={{
          paddingHorizontal:'2%',
          paddingVertical:'4.5%'
        }}>
          <Text style={{
            fontSize: 22,
            fontWeight:'700'
          }}>Profile</Text>
        </View>
      </View>

      <View style={{
        height: 120,
        width: 120,
        marginLeft: '38%',
        marginTop: '3%',
      }}>
        <Image source={Img} style={{
          height: 100,
          width: 100,
          borderRadius: 50
        }}></Image>
      </View>
      <Text style={{
        textAlign: 'center'
      }}>Name : Md Sagor alam{"\n"} Email/Phone : sagor15-2367@diu.edu.bd{"\n"}
        Address : Pirgachha, Rangpur</Text>
      <View style={{
        height: '50%',
        width: '90%',
        marginLeft: '4%',
        marginTop: '5%',
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
        <Text style={{
          textDecorationLine: 'underline',
          marginLeft: '2%',
          textAlign:'center',
          fontWeight:'600',
          fontSize:20,
          marginTop:10
        }}>Old Details</Text>
        <Text style={{
          marginLeft: '4%',
          marginTop: '2%',
          fontSize: 16,
          fontWeight:'500',
        }}>Last 5 ticket Details:</Text>
        <ScrollView>
        <Text style={{
            marginTop: '5%',
            textAlign:'center',
            fontWeight:'700',
            fontSize: 18,
            marginBottom:'2%'
          }}>Show Your Old Details</Text>
          <Text style={{
            marginLeft: '8%',
            marginTop: '1%',
            marginBottom:'2%'
          }}>1. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment: 600 Taka only.</Text>
          <Text style={{
            marginLeft: '8%',
            marginTop: '1%',
            marginBottom:'2%'
          }}>2. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment: 600 Taka only.</Text>
          <Text style={{
            marginLeft: '8%',
            marginTop: '1%',
            marginBottom:'2%'
          }}>3. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment: 600 Taka only.</Text>
          <Text style={{
            marginLeft: '8%',
            marginTop: '1%',
            marginBottom:'2%'
          }}>4. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment:600 Taka only.</Text>
          <Text style={{
            marginLeft: '8%',
            marginTop: '1%',
            marginBottom:'4%'
          }}>5. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment:600 Taka only.</Text>
        </ScrollView>
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