import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Press_Button from '../Components/Press_Button'






const Bus_sit_System = ({ navigation }) => {
  return (
    <View>
      <View>
        <Text style={{color:'white',fontSize:30,textAlign:'center',marginTop:'18%',marginBottom:'30%'}}>
          Welcome to Buy a Ticket
          </Text>
      </View>
      <View style ={styles.BuySubmit}>
        <Press_Button title='Buy Ticket' onPress={() => navigation.navigate("BuyTicket")} />
      </View>

    </View>
  )
}

export default Bus_sit_System

const styles = StyleSheet.create({
  BuySubmit: {
    width: 180,
    height: 70,
    marginTop: '4%',
    marginLeft: '24%',
    paddingHorizontal: 2,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15, shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation:0,
  },
});