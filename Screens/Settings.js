import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Img from '../assets/profile.png';
import Bus from '../assets/seat-top-view-removebg-preview.png';
import Ticket from '../assets/ticket.png';
import Delete from '../assets/trash.png';
import About from '../assets/About.png';
import Notification from '../assets/notification.png';
import Help from '../assets/help-line.png';
import LiveChat from '../assets/liveChat.png';
import Privacy from '../assets/privacy.png';
import Display from '../assets/Display.png';
import Limit from '../assets/limitation-icon-0.jpg';



const Settings = () => {
  return (
    <View style={{
      height: '100%',
      width: '100%',
      margin: '5%',
      padding: '4%'
    }}>
      <View style={{
        height: '18%',
        width: '37%',
       marginTop:'-2%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Img} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Profile Edit</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '27%',
        width: '52%',
        marginTop:'-24%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Bus} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Bus Seate System</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '33%',
        width: '40%',
       marginTop:'-41%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Ticket} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Buy Tickets</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '38%',
        width: '40%',
       marginTop:'-52%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Notification} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Notification</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '42%',
        width: '45%',
       marginTop:'-62%'
      }}>
         <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>         
            <View>
              <Image source={Delete} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Delete Account</Text>
            </View>    
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '45%',
        width: '40%',
       marginTop:'-70%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={About} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>About</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '48%',
        width: '40%',
       marginTop:'-75%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Help} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Help Line </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '51%',
        width: '40%',
       marginTop:'-80%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={LiveChat} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Live Chat </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '52%',
        width: '40%',
        marginTop:'-87%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Privacy} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Privacy </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '52%',
        width: '40%',
        marginTop:'-88%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Display} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Display </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{
        height: '52%',
        width: '40%',
        marginTop:'-88%'
      }}>
        <TouchableOpacity>
          <View style={{
            flexDirection: 'row',
            borderRadius: 5,
            backgroundColor: 'white'
          }}>
            <View>
              <Image source={Limit} style={{
                height: 20,
                width: 20,
                margin: 3,
                borderRadius: 10
              }}></Image>
            </View>
            <View>
              <Text style={{
                fontSize: 18
              }}>Limit </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings