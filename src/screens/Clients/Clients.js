import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'

const Clients = () => {
  const[searchText,setSearchtext] = useState("")
  return (
    <View style={{flex:1, backgroundColor:colors.white}}>
       <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    height: Utils.ScreenHeight(6),
                    borderRadius: 8, 
                    borderWidth: 0.5,
                    borderColor: colors.primary,
                    marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: colors.greyNoti, justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchText}
                        onChange={(text) => setSearchText(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: colors.primary,paddingHorizontal: Utils.ScreenWidth(2), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Search" />
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.primary }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>
                </View>

        <ScrollView style={{marginHorizontal:Utils.ScreenWidth(6), marginTop:Utils.ScreenHeight(2)}}>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5),borderWidth:1,justifyContent:"space-between", height:Utils.ScreenHeight(9), borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center", marginLeft:Utils.ScreenWidth(4) }}>
                <Image source={ImagesPath.home.manImg} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                <Text style={{fontSize:17, fontWeight:"400"}}>Vishesh Gatha</Text>
                {/* <Text></Text> */}
                </View>
                </View>
                <View>
                  <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5),borderWidth:1,justifyContent:"space-between", height:Utils.ScreenHeight(9), borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center", marginLeft:Utils.ScreenWidth(4) }}>
                <Image source={ImagesPath.home.manImg} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                <Text style={{fontSize:17, fontWeight:"400"}}>Vishesh Gatha</Text>
                {/* <Text></Text> */}
                </View>
                </View>
                <View>
                  <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5),borderWidth:1,justifyContent:"space-between", height:Utils.ScreenHeight(9), borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center", marginLeft:Utils.ScreenWidth(4) }}>
                <Image source={ImagesPath.home.manImg} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                <Text style={{fontSize:17, fontWeight:"400"}}>Vishesh Gatha</Text>
                {/* <Text></Text> */}
                </View>
                </View>
                <View>
                  <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:Utils.ScreenHeight(1.5),borderWidth:1,justifyContent:"space-between", height:Utils.ScreenHeight(9), borderColor:colors.grey2, borderRadius:10, flexDirection:"row", alignItems:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center", marginLeft:Utils.ScreenWidth(4) }}>
                <Image source={ImagesPath.home.manImg} style={{height:Utils.ScreenHeight(6), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                <Text style={{fontSize:17, fontWeight:"400"}}>Vishesh Gatha</Text>
                {/* <Text></Text> */}
                </View>
                </View>
                <View>
                  <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
                </View>
          
          </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

export default Clients