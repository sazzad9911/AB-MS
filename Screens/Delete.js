import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import Deletes from '../assets/Delete.png';


const Delete = () => {
    return (
        <View style={{
            height: '100%',
            width: '100%',
            margin: '1%',
            padding: '1%',
            alignItems: 'center'

        }}>
            <View style={{
                height: '6%',
                width: '36%',
                backgroundColor: 'white',
                borderRadius: 5,
                marginTop: '10%',
                flexDirection: 'row'


            }}>
                <View>
                    <Image source={Deletes} style={{
                        height: 30,
                        width: 30,
                        margin: 5
                    }}></Image>
                </View>
                <View>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: '15%'
                    }}>Delete</Text>
                </View>
            </View>

            <View style={{
                height: '5%',
                width: '90%',
                marginTop: '5%',
                backgroundColor: 'white',
                borderRadius: 7,

            }}>
                <TextInput style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: '2%'

                }} placeholder='Email/Phone'></TextInput>

            </View>

            <View style={{
                height: '5%',
                width: '90%',
                marginTop: '5%',
                backgroundColor: 'white',
                borderRadius: 7,

            }}>
                <TextInput style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: '2%'

                }} placeholder='Password'></TextInput>

            </View>

            <View style={{
                height: '5%',
                width: '30%',
                marginTop: '10%',
                backgroundColor: 'white',
                borderRadius: 7,

            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 20,
                    marginTop: '2%'

                }}>Submit</Text>

            </View>

        </View>
    )
}

export default Delete