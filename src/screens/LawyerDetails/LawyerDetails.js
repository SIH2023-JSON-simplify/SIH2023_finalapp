import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { ScrollView } from 'react-native-gesture-handler'
import { utc } from 'moment'

const LawyerDetails = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:colors.white}}>
         <View style={{ flexDirection: "row",
         marginBottom:Utils.ScreenHeight(3),
         marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Lawyer Details</Text>
                </View>
                <ScrollView style={{backgroundColor:colors.white,
                    height:Utils.ScreenHeight(100),
                    marginHorizontal:Utils.ScreenWidth(6)}}>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                    <View>
                        <Image source={ImagesPath.home.manImg} style={{
                                borderRadius:30,
                            height:Utils.ScreenHeight(7),width:Utils.ScreenHeight(7)}}/>
                    </View>
                    <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(2)}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11}}>Speciality:Family Matters</Text>
                    </View>
                    <View style={{flex:1,alignSelf:"center", marginLeft:Utils.ScreenHeight(4)}}>
                    <Text style={{fontWeight:300, color:colors.grey, fontSize:12}}>Reviews</Text>
                    <View style={{flexDirection:"row", alignItems:"center"}}>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
                        <Image source={ImagesPath.home.star} style={{height:Utils.ScreenHeight(2.1),width:Utils.ScreenHeight(2.1)}}/>
               
                  
                    </View>
                    </View>
                    </View>
                    <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View>

                    <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <View style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(1.8)}}>Qualification</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11}}>Harvard Law School </Text>
                    </View>
                    <View style={{marginLeft:Utils.ScreenWidth(25)}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(1.8)}}>Experience</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11}}>5 yrs </Text>

                    </View>
                    </View>
                    <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View>
                    <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <View style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(1.8)}}>Languages Spoken</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11, marginTop:Utils.ScreenHeight(0.5)}}>English{'\t'} Hindi{'\t'} Marathi </Text>
                    </View>
                   
                    </View>
                    <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View>
                    <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <View style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(1.8)}}>Fees</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11, marginTop:Utils.ScreenHeight(0.5)}}>Rs 2000 for Consultancy  </Text>
                    </View>
                   
                    </View>
                    <View style={{width:"100%", 
                    marginTop:Utils.ScreenHeight(2),
                    height:Utils.ScreenHeight(0.1),backgroundColor:colors.grey2}}></View>
                    <View style={{marginTop:Utils.ScreenHeight(2), flexDirection:"row", alignItems:"center", justifyContent:"flex-start"}}>
                    <View style={{}}>
                    <Text style={{fontWeight:600, fontSize:Utils.ScreenHeight(1.8)}}>Availability</Text>
                      <Text style={{fontWeight:400, color:colors.grey, fontSize:11, marginTop:Utils.ScreenHeight(0.5)}}>Monday-Friday{'\n'} - 5:00 pm-8:00 pm </Text>
                    </View>
                   
                    </View>
                    <View style={{marginTop:Utils.ScreenHeight(8), flex:1, justifyContent:"center", alignItems:"center"}}>
                        <TouchableOpacity 
                        onPress={()=>{navigation.navigate("BookAppoinment")}}
                        style={{
                            justifyContent:"center",
                            height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(55), backgroundColor:colors.primary, borderRadius:12}}>
                                <Text style={{textAlign:"center", fontSize:Utils.ScreenHeight(2.5), color:colors.white, fontWeight:500}}>Book Appoinment</Text>
                        </TouchableOpacity>

                    </View>


                </ScrollView>


    </SafeAreaView>
  )
}

export default LawyerDetails