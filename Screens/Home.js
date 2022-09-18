import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.containerh}>
      <Text>Home</Text>
    </View>
  )
}

const { width } = Dimensions.get("screen")

export default Home

const styles = StyleSheet.create({
    containerh: {
      width:width-40,
      height:40,
      borderRadius:10,
      marginTop:'15%',
      marginLeft:'5%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  });
  