
import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, Dimensions, StyleSheet } from 'react-native';
import Ima from '../assets/service.png';
import MapView, { Marker } from 'react-native-maps';


const { width, height } = Dimensions.get("screen")



const Service = () => {
  const imageURL = 'https://www.google.com/maps/@23.8202709,90.2804172,9z'
  const [mapRegion, setmapRegion] = useState({
    latitude: 100.78825,
    longitude: 80.4324,
    latitudeDelta: 25.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={{
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }}>
      <View style={styles.Services}>
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
      <SafeAreaView style={styles.SerSafeAreaView}>
        <ScrollView>
          <View style={styles.ServiceMap}>
            <MapView
              style={{ alignSelf: 'stretch', height: '100%' }}
              region={mapRegion}
            >
              <Marker coordinate={mapRegion}>
                <Image source={{ uri: imageURL }} />
              </Marker>
            </MapView>
          </View>
          <View style={styles.LayOver}>
            <Text style={styles.LayOverText}>Layover</Text>
            <View style={styles.under}></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>

  )
}

export default Service

const styles = StyleSheet.create({
  Services: {
    flexDirection: 'row',
    height: 50,
    width: 150,
    backgroundColor: 'white',
    marginLeft: '5%',
    marginTop: '5%',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15
  },
  ServiceMap: {
    height: height - 500,
    width: width - 25,
    marginTop: '5%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 0,
  },
  LayOver: {
    height: 350,
    width: width - 25,
    backgroundColor: 'white',
    marginTop: '5%',
    marginBottom:'15%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },
  LayOverText: {
    marginTop: '3%',
    fontSize: 20,
    textAlign: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },
  SerSafeAreaView: {
    marginHorizontal: '3%',
    justifyContent: "center",
    alignItems: "center",
    height: height - 205,
    marginBottom: '12%',
    marginTop: '5%',
  },
  under: {
    width: 90,
    height: 2,
    backgroundColor: '#000',
    marginTop: 2,
    marginLeft: 125,
  }
});