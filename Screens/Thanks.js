
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export class Thanks extends Component {
  render() {
    return (
      <View style={{
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <View style={{
          height: '60%',
          width: '90%',
          margin: '4%',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          shadowColor: '#000',
          shadowOffset: { width: 2, height: 5 },
          shadowOpacity: 0.15,
          elevation: 5
        }}>
          <Text style={{
            textAlign: 'center',
            margin: '8%',
            fontSize: 18
          }}>Thank You, Have a safe journey.Please Press "OK" button</Text>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: '10%'
          }}>
            <Button
              title="OK"
            />
          </View>
        </View>
      </View>
    )
  }
}

export default Thanks

