import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react';

const Home = () => {
  return (
    <View style={styles.Homemain}>
      <View style={styles.containerh}>

      </View>
      <View style={styles.homeBox}>
        <View>
        </View>
        <Text>Bus Service</Text>
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
    backgroundColor: 'green',
    paddingHorizontal: 40,
    paddingVertical: 12,
    margin: 5,
    borderRadius: 15,
  },
  Homemain: {
    justifyContent: "center",
    alignItems: 'center'
  }
});
