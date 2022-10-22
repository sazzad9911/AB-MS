import { View, Text,Image,Dimensions} from 'react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity} from 'react-native';

const SettingsButton = ({ 
  title,
 onPress,
 imageIcon
}) => {
  
  return (
    <View style={{
      width:width-198,
      marginTop:'1%'
    }}>
    <TouchableOpacity onPress={onPress?onPress:()=>{}}>
      <View style={styles.prbutton}>
        <Image style={styles.settingimg} source={imageIcon}></Image>
        <Text style={styles.prbutext}>{title}</Text>
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default SettingsButton

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  prbutton: {
    width:width-200,
    flexDirection:'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical:3,
    paddingHorizontal:13,
    alignItems:'center',
    marginLeft:'5%',
    marginBottom:'3%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 15,
  },
  prbutext:{
    color:'black',
    fontSize:20
  },
  settingimg: {
    height: 20,
    width: 20,
    marginRight:'10%',
    borderRadius: 10,
  },
});