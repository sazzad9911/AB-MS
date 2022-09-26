import {
  View, TextInput, SafeAreaView,
  StatusBar, Text, ScrollView, StyleSheet,
  Dimensions, Image, TouchableOpacity
} from 'react-native';
import React from 'react';
import img from '../assets/list-symbol-of-three-items-with-dots.png';
import ima from '../assets/search.png';
import bus from '../assets/buss.webp';
import ook from '../assets/sagor.jpg';
import Drawer from '../Components/Drawerbar';

//assets\DIU Transport (4).jpg




const Home = ({navigation, onPress }) => {
  return (


    <View style={{
      position: 'absolute',
      alignItems: 'center',
      marginLeft: '3.5%',
      justifyContent: 'center',
      flex:1
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

          <TouchableOpacity onPress={onPress}>
            <Image source={img} style={{
              height: 20,
              width: 20,
              marginTop: 5
            }}></Image>
          </TouchableOpacity>
          <Text style={styles.busservice}>Bus Service</Text>
        </View>
      </View>
      <SafeAreaView style={styles.ASafeAreaView}>
        <ScrollView style={styles.scrollView}>

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
              marginBottom:'3%',
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
              marginBottom:'3%',
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 3, },
              shadowOpacity: 0.15,
              shadowRadius: 5,
              elevation: 15,

            }}></Image>

        </ScrollView>
      </SafeAreaView>
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
    marginTop: '-5%',
    borderRadius: 15,
    marginBottom:'-2%',
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
  ASafeAreaView: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
  },

});
