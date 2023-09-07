import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { FlatList } from 'react-native-gesture-handler'

const HomeScreen = () => {
    const data = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];

    const latestdata = [
        { id: '1', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        { id: '2', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        { id: '3', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        { id: '4', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago" },
        

    ];
    const [searchText, setSearchtext] = useState("")
    const trending = ({ item }) => {
        return (
            <TouchableOpacity>
                <Image source={ImagesPath.LegalBridge.court1}
                    style={{ width: Utils.ScreenWidth(82), height: Utils.ScreenHeight(19), resizeMode: "contain" }} />
            </TouchableOpacity>


        )
    }
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
                    <TouchableOpacity style={{ paddingHorizontal: 10, }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.blackdark }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: Utils.ScreenHeight(3), }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Trending</Text>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 14, fontWeight: 400, marginBottom: Utils.ScreenHeight(1.5), color: colors.grey }}>See All</Text>
                    </View>
                    <FlatList

                        data={data} horizontal={true} showsHorizontalScrollIndicator={false} renderItem={trending} />
                </View>

                <View style={{ marginTop: Utils.ScreenHeight(3),marginHorizontal: Utils.ScreenWidth(4) }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{  fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Latest</Text>

                    </View>
                    <FlatList

                        data={latestdata} renderItem={latest} />
                </View>





            </ScrollView>
        </View>
    )
}

export default HomeScreen