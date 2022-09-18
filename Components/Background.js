import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


export default function background() {
  return (
    <View>
      <Image
        style={styles.stretch}
        source={require('../assets/background.png')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  stretch: {
    resizeMode: 'stretch',
    borderRadius: 30,
    display:'flex',

  }
});