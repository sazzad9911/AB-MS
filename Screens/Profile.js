import { View, Text, Image, } from 'react-native'
import React from 'react'
import Ima from '../assets/profile.png';
import Img from '../assets/sagor.jpg'
import { ScrollView } from 'react-native-gesture-handler';

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
        height: '50%',
        width: '90%',
        marginLeft: '4%',
        marginTop: '5%',
        backgroundColor: 'white',
        borderRadius: 10,
      }}>
        <Text style={{
          textDecorationLine: 'underline',
          marginLeft: '2%'
        }}>Old Details</Text>
        <Text style={{
          marginLeft: '2%',
          marginTop: '2%',
        }}>Last 5 ticket Details:</Text>
        <ScrollView>
          <Text style={{
            marginLeft: '4%',
            marginTop: '2%',
          }}> 1. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment:600 Taka only.</Text>
                    <Text style={{
            marginLeft: '4%',
            marginTop: '2%',
          }}> 2. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment:600 Taka only.</Text>
                    <Text style={{
            marginLeft: '4%',
            marginTop: '2%',
          }}> 3. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment:600 Taka only.</Text>
                    <Text style={{
            marginLeft: '4%',
            marginTop: '2%',
          }}> 4. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment:600 Taka only.</Text>
                    <Text style={{
            marginLeft: '4%',
            marginTop: '2%',
          }}> 5. Name: Sagor Alam.{"\n"}Time: 10..00pm{"\n"}Date: 01.08.2022{"\n"}Address: Rangpur to Dhaka.{"\n"}Payment:600 Taka only.</Text>
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