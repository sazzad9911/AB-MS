import { View, Text, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Img from '../assets/profile.png';
import Bus from '../assets/seat-top-view-removebg-preview.png';
import Ticket from '../assets/ticket.png';
import Delete from '../assets/trash.png';
import About from '../assets/About.png';
import bell from '../assets/notification.png';
import Help from '../assets/help-line.png';
import LiveChat from '../assets/liveChat.png';
import Privacy from '../assets/privacy.png';
import Display from '../assets/Display.png';
import Limit from '../assets/limitation-icon-0.jpg';




const Settings = ({ navigation }) => {
  return (
    <View style={{
      height: '90%',
      width: '90%',
      margin: '5%'
    }}>
       <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Img} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Profile Edit
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Ticket} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Buy Tickets
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={About} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            About
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={LiveChat} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Live Chat
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Privacy} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Privacy
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Display} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Display
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Limit} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Limit
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Help} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Help Line
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>navigation.navigate("Notificatione")}>
        <View style={styles.settingButton}>
          <Image source={bell} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Notification
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Delete} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Delete Account
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.settingButton}>
          <Image source={Bus} style={styles.settingimg} />
          <Text style={{
            fontSize: 18,
          }}>
            Bus Seate System
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Settings

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  settingButton: {
    backgroundColor:'#fff',
    width: width - 190,
    borderRadius: 12,
    paddingVertical: 5,
    marginTop: 8,
    paddingEnd:20,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3, },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 0,
  },
  settingimg: {
    height: 20,
    width: 20,
    margin: 3,
    borderRadius: 10
  },
})
