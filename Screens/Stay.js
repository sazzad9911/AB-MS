

import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Press_Button from '../Components/Press_Button';
import Background from '../Components/Background';

const Stay = ({ navigation }) => {

    return (

       
            <View style={styles.container}>
                <View style={styles.logoback}>
                </View>
                <Press_Button title='LogIn' onPress={() => navigation.navigate("StayScreen2")} />
                <Press_Button title='Register' onPress={() => navigation.navigate("Registration")} />
            </View>
       

    )
};

export default Stay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoback: {
        height: 120,
        width: 120,
        borderRadius: 60,
        backgroundColor: '#fff',
        marginBottom: 15,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 3
    }
});