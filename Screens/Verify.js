import React, { Component } from 'react'
import { Text, View, TextInput, Button, StyleSheet } from 'react-native'

export class Verify extends Component {
  render() {
    return (
      <View style={{
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',

      }}>
        <View style={{
          height: '70%',
          width: '90%',
          alignItems: 'center',
          backgroundColor: 'white',
          position: 'absolute',
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 5, },
          shadowOpacity: 0.15,
          shadowRadius: 5,
          elevation: 15,
        }}>
          <Text style={{
            textAlign: 'center',
            marginTop: '10%',
            fontSize: 18
          }}>Please Enter You OTP code </Text>

          <TextInput style={{
            width: '40%',
            marginTop: '10%',

            textAlign: 'center',
            backgroundColor: '#DAD6D6',
            paddingHorizontal: 12,
            paddingVertical: 2,
            borderRadius: 10,
            borderWidth: 0.5
          }} placeholder='OTP'></TextInput>

          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop:'15%'
          }}>
            <Button
              title="Submit"
            />
          </View>
        </View>


      </View>
    )
  }
}

export default Verify

