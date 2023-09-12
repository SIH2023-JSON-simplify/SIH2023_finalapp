import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { useNavigation } from '@react-navigation/native'

const ClientSearchScreen = () => {
  const[searchtext,setSearchtext] = useState();
  const navigation = useNavigation()
  return (
    <View style={{height:Utils.ScreenHeight(100), backgroundColor:colors.white}}>  
        <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8

                    , marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: "#EFF1F3", justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchtext}
                        onChange={(text) => setSearchtext(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: "#D8D8D8", paddingHorizontal: Utils.ScreenWidth(3), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    <TouchableOpacity
                    
                    style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.blackdark }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>

                </View>

                <View style={{marginTop:Utils.ScreenHeight(3),marginHorizontal:Utils.ScreenWidth(5)}}>
                 
                  <View style={{flexDirection:"row", 
                  justifyContent:"space-evenly",marginTop:Utils.ScreenHeight(1),
                  alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
                    <View>
                    <Image source={ImagesPath.home.manImg} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
                    </View>
                      <View>
                      <Text style={{fontWeight:600}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey}}>Divorce</Text>
                      </View>
                      <View >
                      <Text style={{fontWeight:600, color:colors.grey, fontSize:12}}>Exp:{'\n'}5yrs</Text>

                      </View>
                      <TouchableOpacity style={{backgroundColor:colors.secondary, borderRadius:12}}
                      onPress={()=>{navigation.navigate("LawyerDetails")}}
                      >
                        <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                          fontWeight:600,
                          paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>View</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row", 
                  justifyContent:"space-evenly",marginTop:Utils.ScreenHeight(1),
                  alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
                    <View>
                    <Image source={ImagesPath.home.manImg} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
                    </View>
                      <View>
                      <Text style={{fontWeight:600}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey}}>Divorce</Text>
                      </View>
                      <View >
                      <Text style={{fontWeight:600, color:colors.grey, fontSize:12}}>Exp:{'\n'}5yrs</Text>

                      </View>
                      <TouchableOpacity style={{backgroundColor:colors.secondary, borderRadius:12}}>
                        <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                          fontWeight:600,
                          paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>View</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={{flexDirection:"row", 
                  justifyContent:"space-evenly",marginTop:Utils.ScreenHeight(1),
                  alignItems:"center", borderWidth:1, borderColor:colors.grey2, borderRadius:12, height:Utils.ScreenHeight(8)}}>
                    <View>
                    <Image source={ImagesPath.home.manImg} style={{ height:Utils.ScreenHeight(5), width:Utils.ScreenHeight(5)}}/>
                    </View>
                      <View>
                      <Text style={{fontWeight:600}}>Vishesh Gatha</Text>
                      <Text style={{fontWeight:400, color:colors.grey}}>Divorce</Text>
                      </View>
                      <View >
                      <Text style={{fontWeight:600, color:colors.grey, fontSize:12}}>Exp:{'\n'}5yrs</Text>

                      </View>
                      <TouchableOpacity style={{backgroundColor:colors.secondary, borderRadius:12}}>
                        <Text style={{paddingVertical:Utils.ScreenHeight(0.8),
                          fontWeight:600,
                          paddingHorizontal:Utils.ScreenWidth(5), color:colors.primary}}>View</Text>
                      </TouchableOpacity>
                  </View>


                </View>
    </View>
  )
}

export default ClientSearchScreen