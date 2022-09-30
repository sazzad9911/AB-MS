

import React from 'react'
import { StyleSheet, Text, View, Dimensions,Image } from 'react-native';
import Press_Button from '../Components/Press_Button';
import Logo from '../assets/Logo.png'

const Stay = ({ navigation }) => {

    return (
        <View style={styles.Staycont}>
            <View style={styles.logoback}>
            <Image source={Logo} style={styles.StayImage}></Image>
            </View>
            <Press_Button title='LogIn' onPress={() => navigation.navigate("StayScreen2")} />
            <Press_Button title='Register' onPress={() => navigation.navigate("Registration")} />
        </View>
    )
};

export default Stay;

const styles = StyleSheet.create({
    Staycont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    StayImage: {
        width: 100,
        height:143,
        marginTop:'-30%',
        marginBottom:'1%',
        borderRadius: 15,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 3, },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 15,
      }
});