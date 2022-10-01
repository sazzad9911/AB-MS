import { View, StyleSheet, Text, Dimensions, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Press_Button from './Press_Button';
import Clander from '../assets/clander-removebg-preview.png';
import Seat from '../assets/seat-top-view-removebg-preview.png';


const Card = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: '30%' }}>
      <View style={styles.ticket}>
        <Text style={{
          margin: 5,
        }}>From</Text>
        <View style={styles.homeFrom}>
          <TextInput placeholder='From Address'></TextInput>
        </View>

        <View style={styles.exchange}>
          <Press_Button title='Exchange' />
        </View>
        <View style={{ marginTop: '-5%' }}>
          <Text style={{
            marginLeft: 5
          }}>To</Text>
          <View style={styles.homeFrom}>
            <TextInput placeholder='To Address'></TextInput>
          </View>
        </View>
        <View style={{ marginTop: '-5%' }}>
          <Text style={{
            marginLeft: 5,
            marginTop: 25
          }}>Date of Journey</Text>
          <View style={styles.homeFrom}>
            <TextInput placeholder='Date of Journey'></TextInput>
            <TouchableOpacity>
              <Image source={Clander} style={{
                height: 20,
                width: 15,
                marginLeft: '90%'
              }}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: '-5%' }}>
          <Text style={{
            marginLeft: 5,
            marginTop: 25,
            flexDirection: 'row',
          }}>Choose Seat</Text>
          <View style={styles.homeFrom}>
            <TextInput placeholder='Choose Seat'></TextInput>
            <TouchableOpacity>
              <Image source={Seat} style={{
                height: 20,
                width: 15,
                marginLeft: '90%'
              }}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.Submit}>
            <Press_Button title='Submit' />
          </View>
        </View>

      </View>
    </View>
  )
}

export default Card

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  ticket: {
    padding: 15,
    width: width - 30,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,


  },
  exchange: {
    width: 180,
    height: 70,
    marginTop: '-2%',
    marginLeft: '20%',
    paddingHorizontal: 2,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15, shadowColor: "#fff",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },
  homeFrom: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 7,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },
  Submit: {
    width: 180,
    height: 70,
    marginTop: '4%',
    marginLeft: '20%',
    paddingHorizontal: 2,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15, shadowColor: "#fff",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },
});
