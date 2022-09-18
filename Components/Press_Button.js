import { View, Text } from 'react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

const Press_Button = ({ title, onPress}) => {
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.prbutton}>
        <Text style={styles.prbutext}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Press_Button

const styles = StyleSheet.create({
  prbutton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical:5,
    paddingHorizontal:30,
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity:0.2,
    shadowRadius: 3
  },
  prbutext:{
    color:'black',
    fontSize:20
  }
});