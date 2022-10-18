<<<<<<< Updated upstream
import { View, Text } from 'react-native'
import React from 'react'

const Thanks = () => {
  return (
    <View>
      <Text>Thanks</Text>
    </View>
  )
}

export default Thanks;
=======
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Thanks extends Component {
  render() {
    return (
      <View style={{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
      }}>
       
      </View>
    )
  }
}

export default Thanks
>>>>>>> Stashed changes
