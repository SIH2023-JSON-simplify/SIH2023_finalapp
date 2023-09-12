import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const BookAppoinment = () => {
    const navigation = useNavigation();
    const[online,setonline] = useState(true)
    const[offline,setoffline] = useState(false)
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
         <View style={{ flexDirection: "row",
         marginBottom:Utils.ScreenHeight(3),
         marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Book Appoinment</Text>
                </View>
                <ScrollView style={{marginHorizontal:Utils.ScreenWidth(5), height:Utils.ScreenHeight(100), backgroundColor:colors.white}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <View>
                        <Image source={ImagesPath.home.manImg} style={{
                                borderRadius:12,borderWidth:1,
                            height:Utils.ScreenHeight(12),width:Utils.ScreenHeight(10)}}/>
                    </View>
                    <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                    <Text style={{fontWeight:600,color:colors.black, fontSize:Utils.ScreenHeight(2)}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:Utils.ScreenHeight(1.6)}}>Speciality:Family Matters</Text>
                     
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:Utils.ScreenHeight(1.6)}}>Speaks English, Hindi, Marathi</Text>
                    
                    </View>
                   
                    </View>
                    <View style={{marginTop:Utils.ScreenHeight(6), flexDirection:"row", justifyContent:"center"}}>
                        <TouchableOpacity
                        onPress={()=>{
                            setoffline(!offline);
                            setonline(!online)
                        }}
                        style={[{height:Utils.ScreenHeight(5),
                            borderWidth:1,borderColor:colors.grey2,
                            width:Utils.ScreenWidth(30),  borderTopLeftRadius:10,borderBottomLeftRadius:10, justifyContent:"center"},{backgroundColor:offline === true ? colors.primary : colors.secondary}]}> 
                                <Text style={[{textAlign:"center"},{color:offline === true? colors.white:colors.black}]}>Office Visit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{
                            setoffline(!offline);
                            setonline(!online)
                        }}
                        style={[{height:Utils.ScreenHeight(5), width:Utils.ScreenWidth(30),
                            borderWidth:1,borderColor:colors.grey2,
                            backgroundColor:colors.secondary, borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:"center"},{backgroundColor:online === true ? colors.primary : colors.secondary}]}>
                                <Text style={[{textAlign:"center", color:colors.black},{color:online === true? colors.white:colors.black}]}>Online Consultation</Text>
                        </TouchableOpacity>
                        {/* selectCalender === index ? colors.white : colors.black, */}
                    </View>
                    {/* <View style={{marginTop:Utils.ScreenHeight(4)}}>
                        <View >
                    <Text style={{fontWeight:600,color:colors.black, fontSize:Utils.ScreenHeight(2)}}>About me</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:Utils.ScreenHeight(1.5)}}>I am a dedicated gynecologist with over 10 years of experience in women's health. I am passionate about providing comprehensive care and support to women throughout their reproductive journey. My areas of expertise include prenatal care, family planning, menstrual disorders, and menopause management. </Text>
                      </View>
                        <View style={{marginTop:Utils.ScreenHeight(2)}} >
                    <Text style={{fontWeight:600,color:colors.black, fontSize:Utils.ScreenHeight(2)}}>Address</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:Utils.ScreenHeight(1.5)}}>A,303 gurukrupa, SV Road Bandra West</Text>
                      </View>
                    </View> */}
                    <View style={{marginTop:Utils.ScreenHeight(3)}}>
                    <View >
                    <Text style={{fontWeight:600,color:colors.black, fontSize:Utils.ScreenHeight(2)}}>Select Appoinment Time</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:Utils.ScreenHeight(1.5)}}></Text>
                      </View>
                      <View style={{ paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(1), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1) }}>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>Appointment Date</Text>
                            <Text>13th Sept 2023 </Text>

                        </View>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingBottom: Utils.ScreenHeight(2), height: Utils.ScreenHeight(6), flexDirection: 'row', marginVertical: Utils.ScreenWidth(2), justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderColor: colors.grey2, paddingVertical: Utils.ScreenHeight(1) }}>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text style={{ marginVertical: 5, fontSize: Utils.ScreenHeight(1.5), color: colors.grey, textAlign: 'center' }}>Appointment Time</Text>
                            <Text>5:00 pm </Text>

                        </View>
                        <TouchableOpacity style={{ justifyContent: 'center' }}>
                            <Image source={ImagesPath.home.right_arrow} style={{ width: 13, height: 13, resizeMode: 'contain', marginRight: Utils.ScreenWidth(3) }} />
                        </TouchableOpacity>
                    </View>

                    </View>

                    <View style={{marginTop:Utils.ScreenHeight(10), flex:1, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity 
                        // onPress={()=>{navigation.navigate("")}}
                        style={{
                            justifyContent:"center",
                            height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.primary, borderRadius:12}}>
                                <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(1.5), color:colors.white, fontWeight:500}}>Proceed to pay Rs 1000</Text>
                        </TouchableOpacity>

                    </View>



                </ScrollView>


    </SafeAreaView>
  )
}

export default BookAppoinment