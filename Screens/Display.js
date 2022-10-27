import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native';
import Ima from '../assets/Display.png';

export class Display extends Component {
    render() {
        return (
            <View style={styles.Fulldisplay}>
                <View style={styles.Heard}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View>
                            <Image source={Ima} style={styles.Icon}></Image>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>Display</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.Details}>

                </View>
            </View>
        )
    }
}

export default Display


const styles = StyleSheet.create({
    Fulldisplay: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    Heard: {
        height: '5%',
        width: '30%',
        backgroundColor: 'white',
        marginTop: '15%',
        borderRadius: 15,
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0, },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 0
    },
    Icon: {
        height: '80%',
        width: '80%',
        margin: '15%'
    },
    Details: {
        width: '90%',
        height: '80%',
        margin: '5%',
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: "#fff",
        shadowOffset: { width: 0, height: 0, },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 0

    }
});
