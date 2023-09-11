import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { FlatList } from 'react-native-gesture-handler'
import Navigation from '../../navigation/Navigation'
import { useNavigation } from '@react-navigation/native'

const ClientHomeScreen = () => {
    const navigation = useNavigation();
   

    const latestdata = [
        { id: '1', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        { id: '2', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        { id: '3', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        { id: '4', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        

    ];
    const [searchText, setSearchtext] = useState("")
   
    const latest = ({ item }) => {
        return (
            <TouchableOpacity>
                <View style={{flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                    <View>
                        <Image source={ImagesPath.LegalBridge.court2}
                            style={{ width: Utils.ScreenWidth(25), height: Utils.ScreenHeight(10), resizeMode: "contain" }} />
                    </View>
                    <View style={{flex:1, justifyContent:"space-evenly"}}>
                        <Text style={{fontSize:12, color:colors.grey, fontWeight:300}}> {item.header} </Text>
                        <Text style={{fontSize:15, fontWeight:400}}> {item.title} </Text>
                        <Text style={{fontSize:12, color:colors.grey, fontWeight:300}}>{item.duration} </Text>
                       
                    </View>
                </View>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{ backgroundColor: colors.white, flex: 1 }}>
            <ScrollView style={{}}>
                <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    borderRadius: 8

                    , marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: "#EFF1F3", justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchText}
                        onChange={(text) => setSearchtext(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: "#D8D8D8", paddingHorizontal: Utils.ScreenWidth(3), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.blackdark }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: Utils.ScreenHeight(3), marginHorizontal:Utils.ScreenWidth(4)}}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Services </Text>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 14, fontWeight: 400, marginBottom: Utils.ScreenHeight(1.5), color: colors.grey }}>View All</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                      <TouchableOpacity>
                          <Image source={ImagesPath.LegalBridge.notary} style={{height:Utils.ScreenHeight(9),
                            borderWidth:1,borderColor:colors.grey2, borderRadius:5,
                            width:Utils.ScreenWidth(44), resizeMode:"contain"}}/>                        
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Image source={ImagesPath.LegalBridge.agreement} style={{height:Utils.ScreenHeight(9),
                            borderWidth:1,borderColor:colors.grey2, borderRadius:5,
                            width:Utils.ScreenWidth(44), resizeMode:"contain"}}/>                        
                      </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",marginTop:Utils.ScreenHeight(2), justifyContent:"space-between", alignItems:"center"}}>
                      <TouchableOpacity>
                          <Image source={ImagesPath.LegalBridge.certificates} style={{height:Utils.ScreenHeight(9),
                            borderWidth:1,borderColor:colors.grey2, borderRadius:5,
                            width:Utils.ScreenWidth(44), resizeMode:"contain"}}/>                        
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Image source={ImagesPath.LegalBridge.legalcase} style={{height:Utils.ScreenHeight(9),
                            borderWidth:1,borderColor:colors.grey2, borderRadius:5,
                            width:Utils.ScreenWidth(44), resizeMode:"contain"}}/>                        
                      </TouchableOpacity>
                    </View>

                </View>

                <View style={{marginTop:Utils.ScreenHeight(3)}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Quick Tabs </Text>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 14, fontWeight: 400, marginBottom: Utils.ScreenHeight(1.5), color: colors.grey }}>View All</Text>
                    </View>
                    <View style={{marginHorizontal:Utils.ScreenWidth(4),flexDirection:"row", justifyContent:"space-around", alignItems:"center"}}>
                      <TouchableOpacity>
                        <Image source={ImagesPath.LegalBridge.apply} style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(24),
                        resizeMode:"contain" , borderWidth:0.5, borderColor:colors.grey2, borderRadius:12, shadowColor:colors.blackdark, shadowOpacity:0.1
                        }}/>
                      </TouchableOpacity>
                      <TouchableOpacity
                      onPress={()=>{navigation.navigate("CheckStatus")}}
                      >
                        <Image source={ImagesPath.LegalBridge.checkstatus} style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(24),
                        resizeMode:"contain" , borderWidth:0.5, borderColor:colors.grey2, borderRadius:12, shadowColor:colors.blackdark, shadowOpacity:0.1
                        }}/>
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image source={ImagesPath.LegalBridge.resumeapplication} style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(24),
                        resizeMode:"contain" , borderWidth:0.5, borderColor:colors.grey2, borderRadius:12, shadowColor:colors.blackdark, shadowOpacity:0.1
                        }}/>
                      </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                  marginTop:Utils.ScreenHeight(3),
                  borderWidth:0.5,borderColor:colors.grey2, borderRadius:12,
                  marginHorizontal:Utils.ScreenWidth(4), flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <View >
                  <Image source={ImagesPath.LegalBridge.appoinment}
                  style={{height:Utils.ScreenHeight(13), width:Utils.ScreenWidth(45),
                  resizeMode:"contain", 
                  }}
                  />
                </View>

                <View>
                  <Text style={{fontSize:Utils.ScreenHeight(1.8),fontWeight:450}}>TODAY'S APPOINMENT</Text>
                  <Text style={{fontWeight:300, marginTop:Utils.ScreenHeight(1), fontSize:Utils.ScreenHeight(1.5)}}>Appoinment with {'\n'}Mr Vishesh Gatha</Text>
                  <TouchableOpacity 
                  onPress={()=>{navigation.navigate("VideoCall")}}
                  style={{alignSelf:"center", marginTop:Utils.ScreenHeight(1)
                ,backgroundColor:colors.primary, borderRadius:12
                
                }}>
                    <Text style={{fontSize:Utils.ScreenHeight(1.5), color:colors.white,paddingVertical:Utils.ScreenHeight(0.7),
                    paddingHorizontal:Utils.ScreenWidth(8)
                    }}>Connect</Text>
                  </TouchableOpacity>
                </View>
                </View>
                <View style={{ marginTop: Utils.ScreenHeight(3),marginHorizontal: Utils.ScreenWidth(4) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{  fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Explore</Text>

                    </View>
                    <FlatList

                        data={latestdata} renderItem={latest} />
                </View>





            </ScrollView>
        </View>
    )
}

export default ClientHomeScreen;