import { View, TextInput, SafeAreaView, StatusBar, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import img from '../assets/list-symbol-of-three-items-with-dots.png';
import ima from '../assets/search.png';
import bus from '../assets/buss.webp';
import ook from '../assets/sagor.jpg';
//assets\DIU Transport (4).jpg

const Home = (navigation) => {
  return (


    <View style={{
      position: 'absolute',
      alignItems: 'center',
      marginLeft: '3.5%',
      justifyContent: 'center',
    }}>

      <View style={styles.Homemain}>
        <View style={styles.containerh}>
          <View style={styles.search}>

            <Image source={ima} style={{
              height: 30,
              width: 30,
              margin: 5,
              marginLeft: 7

            }}></Image>
            <View style={{
              margin: 5
            }}>
              <TextInput placeholder='search'></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.homeBox}>

          <TouchableOpacity>
            <Image source={img} style={{
              height: 20,
              width: 20,
              marginTop: 5
            }}></Image>
          </TouchableOpacity>
          <Text style={styles.busservice}>Bus Service</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView >

          <TouchableOpacity>

            <Image source={ook} style={{
              height: 200,
              width: 300,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3, },
              shadowOpacity: 0.15,
              shadowRadius: 5,
              elevation: 15,

            }}></Image>
          </TouchableOpacity>
          <Image source={bus} style={{
            height: 200,
            width: 300,
            marginTop: '3%',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3, },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 15,

          }}></Image>


          <TouchableOpacity>

            <Image source={ook} style={{
              height: 200,
              width: 300,
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3, },
              shadowOpacity: 0.15,
              shadowRadius: 5,
              elevation: 15,

            }}></Image>
          </TouchableOpacity>
          <Image source={bus} style={{
            height: 200,
            width: 300,
            marginTop: '3%',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3, },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 15,

          }}></Image>

          <Image source={bus} style={{
            height: 200,
            width: 300,
            marginTop: '3%',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3, },
            shadowOpacity: 0.15,
            shadowRadius: 5,
            elevation: 15,

          }}></Image>

        </ScrollView>
      </View>
    </View>


  )
}

const { width } = Dimensions.get("screen")

export default Home

const styles = StyleSheet.create({
  coarea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  containerh: {
    width: width - 40,
    height: 40,
    borderRadius: 10,
    marginTop: '25%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeBox: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 12,
    margin: 10,
    marginTop: '-4%',
    marginBottom: '8%',
    borderRadius: 15,
    flexDirection: 'row',
  },
  Homemain: {
    justifyContent: "center",
    alignItems: 'center'
  },
  search: {
    backgroundColor: 'white',
    height: 35,
    width: 300,
    marginBottom: '20%',
    borderRadius: 20,
    flexDirection: 'row',
  },
  busservice: {
    fontSize: 20,
    marginLeft: 20,
  },


});
