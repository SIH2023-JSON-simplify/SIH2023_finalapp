import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import styles from '../Splash/styles'

const Register = () => {
  const navigation = useNavigation();
  const [fullName , setFullName] = useState('');
  const [dob, setDOB] = useState(null);
  const [mobNo, setMobNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [about, setAbout] = useState('');
  const [caseDetails, setCaseDetails] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

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
                        value={dob}
                        onChange={(text) => setDOB(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter your date of birth" />
            </View>

        <View style = {{  flexDirection: 'row', justifyContent: 'space-evenly', marginTop: Utils.ScreenHeight(2)}}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colors.newGrey,
            backgroundColor: selectedOption === 'Male' ? colors.selectedOption : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 8,
          }}
          onPress={() => handleOptionSelect('Male')}
        >
          {selectedOption === 'Male' && (
            <Text style={{ color: colors.newGrey }}>✓</Text>
          )}
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: colors.newGrey }}>Male</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colors.newGrey,
            backgroundColor: selectedOption === 'Female' ? colors.selectedOption : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 8,
          }}
          onPress={() => handleOptionSelect('Female')}
        >
          {selectedOption === 'Female' && (
            <Text style={{ color: colors.newGrey }}>✓</Text>
          )}
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: colors.newGrey }}>Female</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: colors.newGrey,
            backgroundColor: selectedOption === 'Other' ? colors.selectedOption : 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 8,
          }}
          onPress={() => handleOptionSelect('Other')}
        >
          {selectedOption === 'Other' && (
            <Text style={{ color: colors.newGrey }}>✓</Text>
          )}
        </TouchableOpacity>
        <Text style={{ fontSize: 16, color: colors.newGrey }}>Other</Text>
      </View>
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={mobNo}
                        onChange={(text) => setMobNo(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter Mobile" />
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={email}
                        onChange={(text) => setEmail(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter Email" />
            </View>

            <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={password}
                        onChange={(text) => setPassword(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Create Password" />
            </View>

            <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(1)}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(1) }} />
              </View>

            <View style = {{ marginLeft: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2), flexDirection: 'row'}}>
              <Text style = {{ color: colors.black, fontWeight: 600, fontSize: 14}}>About me</Text>
              <Text style = {{color: colors.newGrey, }}> (optional) </Text>
            </View>
            <TextInput
                        value={about}
                        onChange={(text) => setAbout(text)}
                        style={{ height: Utils.ScreenHeight(12), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3),
                                 width: '93%', marginTop: Utils.ScreenHeight(1.5),
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2), marginLeft: Utils.ScreenWidth(3)}}
                        placeholderTextColor={colors.newGrey} placeholder="Create Password" />

            <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={caseDetails}
                        onChange={(text) => setCaseDetails(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Add case details" />
            </View>

          <View style = {{ alignItems: 'center', marginTop: Utils.ScreenHeight(3), marginBottom: Utils.ScreenHeight(2)}}>
            <TouchableOpacity style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 8,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(7), 
                                         width: '92%'}} onPress = {() => { navigation.navigate('SignupLawyer')}}>
               <Text style = {{ color: colors.white, fontWeight: 400, fontSize: 16}}>
                Continue
               </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register