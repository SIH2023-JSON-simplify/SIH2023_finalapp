import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Utils, colors } from '../../contants'
import ImagesPath from '../../assests/ImagesPath'
import { FlatList } from 'react-native-gesture-handler'
import Navigation from '../../navigation/Navigation'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const data = [
        { id: '1',image:ImagesPath.LegalBridge.court1 },
        { id: '2',image:ImagesPath.LegalBridge.c5 },
        { id: '3',image:ImagesPath.LegalBridge.c6 },
        
    ];

    const latestdata = [
        { id: '1', header: "Supreme Court", title: "Supreme Court Upholds Disciplinary Action Against ...", duration: "15 min ago", image:ImagesPath.LegalBridge.c1 },
        { id: '2', header: "News Updates", title: "Preventing Multiplicity And Streamlining Processes For ...", duration: "30 min ago" ,image:ImagesPath.LegalBridge.c2 },
        { id: '3', header: "High Court", title: "Gujarat High Court Weekly Round-Up: August 28 To ...", duration: "45 min ago",image:ImagesPath.LegalBridge.c3 },
        { id: '4', header: "Supreme Court", title: "Manipur Violence | Following Supreme Court's Direction ...", duration: "50 min ago" ,image:ImagesPath.LegalBridge.c4},
        

    ];
    const [searchText, setSearchtext] = useState("")
    const trending = ({ item }) => {
        return (
            <TouchableOpacity style={{}}>
                <Image source={item.image}
                    style={{ width: Utils.ScreenWidth(82), borderRadius:20,height: Utils.ScreenHeight(19), resizeMode: "contain" }} />
            </TouchableOpacity>


        )
    }
    const latest = ({ item }) => {
        const temp = item.image
        return (
            <TouchableOpacity>
                <View style={{flexDirection:"row", marginBottom:Utils.ScreenHeight(1)}}>
                    <View>
                        <Image source={item.image}
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

                <View style={{ marginTop: Utils.ScreenHeight(3), }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 18, fontWeight: 600, marginBottom: Utils.ScreenHeight(1.5) }}>Trending </Text>
                        <Text style={{ marginHorizontal: Utils.ScreenWidth(4), fontSize: 14, fontWeight: 400, marginBottom: Utils.ScreenHeight(1.5), color: colors.grey }}>See All photos</Text>
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