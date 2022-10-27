import { View, Text, StyleSheet, Image, TouchableOpacity,onPress } from 'react-native'
import React from 'react'
import Press_Button from '../Components/Press_Button';
import Driving from '../assets/driving.png';






const Bus_sit_System = ({ navigation }) => {
  return (
    <View style={{
      height: '100%',
      width: '100%',
      alignItems: 'center'
    }}>
      <View>
        <Text style={{
          color: 'white',
          fontSize: 30,
          textAlign: 'center',
          marginTop: '18%',
          marginBottom: '5%'
        }}>
          Welcome to Buy a Ticket
        </Text>
      </View>

      <View style={styles.Bus_sit}>
        <View style={styles.Row}>
          <View style={styles.Cloumn}>
            <Image source={Driving} style={{
              height: '100%',
              width: '100%'
            }}></Image>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>A1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>A2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>A3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>A4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>B1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>B2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>B3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>B4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>C1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>C2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>C3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>C4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>D1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>D2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>D3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>D4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>E1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>E2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>E3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>E4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>F1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>F2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>F3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>F4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>G1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>G2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>G3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>G4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>H1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>H2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>H3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>H4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>I1</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>I2</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>I3</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.A1}>
              <TouchableOpacity style={styles.Touchs}>
                <Text>I4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.R1}>
          <View style={styles.J1}>
            <TouchableOpacity style={styles.Touchs}>
              <Text>J1</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.J1}>
            <TouchableOpacity style={styles.Touchs}>
              <Text>J2</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.J1}>
            <TouchableOpacity style={styles.Touchs}>
              <Text>J3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.J1}>
            <TouchableOpacity style={styles.Touchs}>
              <Text>J4</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.J1}>
            <TouchableOpacity style={styles.Touchs}>
              <Text>J5</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.J1}>
            <TouchableOpacity style={styles.Touchs}>
              <Text>J6</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <View style={styles.BuySubmit}>
        <Press_Button title='Buy Ticket' onPress={() => navigation.navigate("BuyTicket")} />
      </View>

    </View>
  )
}

export default Bus_sit_System

const styles = StyleSheet.create({
  BuySubmit: {
    width: 180,
    height: 70,
    marginTop: '4%',
    paddingHorizontal: 2,
    paddingVertical: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15, shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 0
  },
  Bus_sit: {
    width: '85%',
    height: '70%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 0

  },
  Row: {
    width: '96%',
    height: '12%',
    margin: '2%',
    borderRadius: 10,
    backgroundColor: 'black'
  },
  Cloumn: {
    height: '85%',
    width: '20%',
    marginTop: '1.5%',
    marginLeft: '72%',
    backgroundColor: 'white',
    borderRadius: 10
  },
  R1: {
    height: '8%',
    width: '95%',
    backgroundColor: 'black',
    borderRadius: 15,
    flexDirection: 'row',
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 0
  },
  A1: {
    height: '80%',
    width: '26%',
    marginTop: '1.5%',
    marginLeft: '4%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  J1: {
    height: '80%',
    width: '12%',
    marginTop: '1.5%',
    marginLeft: '4%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  Touchs: {
    height: '100%',
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD'
  }
});