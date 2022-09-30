
import {
  View, TextInput, SafeAreaView,
  StatusBar, Text, ScrollView, StyleSheet,
  Dimensions, Image, TouchableOpacity
} from 'react-native';
import React from 'react';
import ima from '../assets/search.png';
import bus from '../assets/buss.webp';
import ook from '../assets/sagor.jpg';




//assets\DIU Transport (4).jpg



const { height } = Dimensions.get('window')
const Home = () => {

  return (
    <View style={{
      position: 'absolute',
      alignItems: 'center',
      margin: '2%',
      justifyContent: 'center',
      flex: 1
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
              <TextInput style={{
              width:240
            }} placeholder='search'></TextInput>
            </View>
          </View>
        </View>
        <View style={styles.homeBox}>
          <Text style={styles.busservice}>Bus Services</Text>
        </View>
      </View>
      <SafeAreaView style={styles.ASafeAreaView}>
        <ScrollView style={styles.scrollView}>

          <TouchableOpacity>
            <Image source={ook} style={styles.HomeImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={bus} style={styles.HomeImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ook} style={styles.HomeImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={bus} style={styles.HomeImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={ook} style={styles.HomeImage}></Image>
          </TouchableOpacity>

        </ScrollView>
      </SafeAreaView>
    </View>


  )
}

const { width } = Dimensions.get("screen")

export default Home;

const styles = StyleSheet.create({
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
    marginTop: '-5%',
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center',
    marginBottom: '-2%',
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
    fontSize: 25
  },
  ASafeAreaView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height - 205,
    marginTop: 20,
    paddingHorizontal: 5
  },
  HomeImage: {
    marginTop: 10,
    width: width - 20,
    height: height - 500,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },

});
