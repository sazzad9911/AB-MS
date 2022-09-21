import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import img from '../assets/list-symbol-of-three-items-with-dots.png'
import ima from '../assets/search.png';


const Home = () => {
  return (
    <View style={styles.Homemain}>
      <View style={styles.containerh}>
      </View>
      <View style={styles.search}>

        <Image source={ima} style={{
          height: 40,
          width: 40
        }}></Image>
        <View style={{
          margin: 5
        }}>
          <Text style={{
            fontSize: 15,
            textAlign: 'center',
            justifyContent: 'center',

          }}>search</Text>
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
      <View style={styles.ticket}>
        <Text style={{
          margin: 5,
        }}>From</Text> 
      </View>

    </View>
  )
}

const { width } = Dimensions.get("screen")

export default Home

const styles = StyleSheet.create({
  containerh: {
    width: width - 40,
    height: 40,
    borderRadius: 10,
    marginTop: '15%',
    marginLeft: '5%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  homeBox: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 12,
    margin: 10,
    borderRadius: 15,
    flexDirection: 'row'
  },
  Homemain: {
    justifyContent: "center",
    alignItems: 'center'
  },
  search: {
    backgroundColor: 'white',
    height: 35,
    width: 300,
    borderRadius: 20,
    marginTop: -60,
    flexDirection: 'row'
  },
  busservice: {
    fontSize: 20,
    marginLeft: 20,

  },
  ticket: {
    height: 280,
    width: 350,
    backgroundColor: 'white',
    borderRadius: 10
  }
});
