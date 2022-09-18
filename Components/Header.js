import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.containera}>
      <Text>Header</Text>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
    containera: {
      padding:33,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
