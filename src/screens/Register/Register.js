import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import styles from '../Splash/styles'

const Register = () => {
  const[fullName , setFullName] = useState('');

  return (
    <SafeAreaView>
        <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView
                backgroundColor = {colors.white}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>           

        <View style = {{justifyContent: 'center', alignItems: 'center' }}>
        <Image source = {ImagesPath.home.logo_primary} 
        style={{ width: Utils.ScreenWidth(24), height: Utils.ScreenHeight(10), resizeMode: "contain" }}/>
      </View>
      <TouchableOpacity activeOpacity={0.3}
                        style={{
                            marginLeft: Utils.ScreenWidth(3),
                            alignItems: 'center',
                            elevation: 7,
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            justifyContent: 'center',
                            top: Utils.ScreenHeight(-3),
                            width: Utils.ScreenWidth(12),
                            height: Utils.ScreenHeight(6),}}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image source={ImagesPath.signUp.backIcon} 
                        style={{
                        resizeMode: 'contain',
                        height: Utils.ScreenWidth(4.8),
                        width: Utils.ScreenWidth(5.8),}} />
                    </TouchableOpacity> 
        
            <View style = {{ top: Utils.ScreenHeight(-1), marginLeft: Utils.ScreenWidth(3)}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 18 }}>Personal Details</Text>
            </View>

              <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', top: Utils.ScreenHeight(-2)}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(1) }} />
              </View>

            <View style = {{ justifyContent: 'center',
                             alignItems: 'center',
                             height: Utils.ScreenHeight(20),
                             }}>
              <Image source = { ImagesPath.onafterprint.camera_icon} style = {{ width: Utils.ScreenWidth(16), 
                height: Utils.ScreenHeight(8), borderRadius: Utils.ScreenHeight(20)}}/>
              <Text style = {{ color: colors.newGrey, marginTop: Utils.ScreenHeight(1), fontSize: 14}}>Upload Profile Photo</Text>
            </View>

            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(1) }} />
            </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(3), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 16}}>Add Personal Details</Text>
              <Text style = {{color: colors.red, }}> * </Text>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={fullName}
                        onChange={(text) => setFullName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter your full name" />
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={fullName}
                        onChange={(text) => setFullName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="DD/MM/YYYY" />
            </View>

            <View style = {{ marginLeft: Utils.ScreenHeight(2), flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <TouchableOpacity style = {{
                marginTop: Utils.ScreenHeight(2),
                // marginRight: Utils.ScreenWidth(2),
                borderRadius: 8, 
                backgroundColor: colors.white
              }}>
                  <Text
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '100%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Male" />
              </TouchableOpacity>

              <TouchableOpacity style = {{
                marginTop: Utils.ScreenHeight(2),
                marginRight: Utils.ScreenWidth(2),
                borderRadius: 8, 
                backgroundColor: colors.white
              }}>
                  <TextInput
                        value={fullName}
                        onChange={(text) => setFullName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '100%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Female" />
              </TouchableOpacity>

              <TouchableOpacity style = {{
                marginTop: Utils.ScreenHeight(2),
                marginRight: Utils.ScreenWidth(2),
                borderRadius: 8, 
                backgroundColor: colors.white
              }}>
                  <TextInput
                        value={fullName}
                        onChange={(text) => setFullName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '100%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Other" />
              </TouchableOpacity>
            </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Register