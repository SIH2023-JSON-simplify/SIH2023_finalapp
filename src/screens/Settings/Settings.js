import { View, Text, SafeAreaView, Image, ScrollView, VirtualizedList } from 'react-native'
import React from 'react'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Settings = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: colors.white }}>
            <View style={{ height: "100%", backgroundColor: colors.white }}>
                {/* {header} */}
                <View style={{ flexDirection: "row", marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Settings</Text>

                </View>
                {/* {header} */}

                <ScrollView >
                    <View style={{ width: '100%', paddingVertical: Utils.ScreenHeight(1), marginVertical: 10, backgroundColor: colors.back }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '25%', height: 50, alignItems: 'center', marginVertical: 5 }}>
                                <Image style={{ width: 60, height: 55 }} source={ImagesPath.home.profile_icon} />
                            </View>
                            <View style={{ display: 'flex' }}>
                                <Text style={{ fontWeight: '400', fontSize: 18, color: colors.black }}>Vishesh Gatha</Text>
                                <View style={{ flexDirection: 'row', marginBottom: -5, marginVertical: 5 }}>
                                    <TouchableOpacity>
                                        <Text style={{ fontWeight: '600', fontSize: 12, color: colors.primary }}>View Profile | </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{ fontWeight: '600', fontSize: 12, color: colors.primary }}>Edit Profile</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: Utils.ScreenWidth(5) }}>
                        <TouchableOpacity style={{ borderWidth: 0.5, marginTop: Utils.ScreenHeight(2), borderColor: colors.grey2, borderRadius: 6, height: Utils.ScreenHeight(6), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: Utils.ScreenWidth(4), justifyContent: "space-between" }}>
                                <Text style={{ color: colors.black, fontWeight: '400', fontSize: 16 }}>Staff</Text>

                                <Image style={{ width: 30, height: 30 }} source={ImagesPath.home.arrow_covered} />

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={()=>{navigation.navigate("CheckStatus")}}
                        style={{ borderWidth: 0.5, marginTop: Utils.ScreenHeight(2), borderColor: colors.grey2, borderRadius: 6, height: Utils.ScreenHeight(6), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: Utils.ScreenWidth(4), justifyContent: "space-between" }}>
                                <Text style={{ color: colors.black, fontWeight: '400', fontSize: 16 }}>Check Case status</Text>

                                <Image style={{ width: 30, height: 30 }} source={ImagesPath.home.arrow_covered} />

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ borderWidth: 0.5, marginTop: Utils.ScreenHeight(2), borderColor: colors.grey2, borderRadius: 6, height: Utils.ScreenHeight(6), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: Utils.ScreenWidth(4), justifyContent: "space-between" }}>
                                <Text style={{ color: colors.black, fontWeight: '400', fontSize: 16 }}>Staff</Text>

                                <Image style={{ width: 30, height: 30 }} source={ImagesPath.home.arrow_covered} />

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={()=>{navigation.navigate("OCR")}}
                        style={{ borderWidth: 0.5, marginTop: Utils.ScreenHeight(2), borderColor: colors.grey2, borderRadius: 6, height: Utils.ScreenHeight(6), justifyContent: "center" }} >
                            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: Utils.ScreenWidth(4), justifyContent: "space-between" }}>
                                <Text style={{ color: colors.black, fontWeight: '400', fontSize: 16 }}>Get Document Summary </Text>

                                <Image style={{ width: 30, height: 30 }} source={ImagesPath.home.arrow_covered} />

                            </View>
                        </TouchableOpacity>
                    </View>

    <View style={{ marginHorizontal: Utils.ScreenWidth(4), marginTop: Utils.ScreenHeight(3) }}>
        <Text style={{ flex: 1, marginRight: Utils.ScreenWidth(5), fontSize: 18, fontWeight: "500" }}>General</Text>
        <TouchableOpacity style={{ borderWidth: 0.5, marginTop: Utils.ScreenHeight(1), borderColor: colors.grey2, borderRadius: 6, height: Utils.ScreenHeight(6), justifyContent: "center" }} >
            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: Utils.ScreenWidth(4), justifyContent: "space-between" }}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={{ width: 25, height: 25 }} source={ImagesPath.home.review_icon} />
                <Text style={{ color: colors.black, fontWeight: '300', fontSize: 16, marginLeft:Utils.ScreenWidth(3) }}>
                    Rate Us</Text>
                    </View>
                <Image style={{ width: 30, height: 30 }} source={ImagesPath.home.arrow_covered} />

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 0.5, marginTop: Utils.ScreenHeight(1), borderColor: colors.grey2, borderRadius: 6, height: Utils.ScreenHeight(6), justifyContent: "center" }} >
            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: Utils.ScreenWidth(4), justifyContent: "space-between" }}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={{ width: 25, height: 25 }} source={ImagesPath.home.terms_and_condition} />
                <Text style={{ color: colors.black, fontWeight: '300', fontSize: 16, marginLeft:Utils.ScreenWidth(3) }}>
                    Terms of Service</Text>
                    </View>
                <Image style={{ width: 30, height: 30 }} source={ImagesPath.home.arrow_covered} />

            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ borderWidth: 0.5, marginTop: Utils.ScreenHeight(1), borderColor: colors.grey2, borderRadius: 6, height: Utils.ScreenHeight(6), justifyContent: "center" }} >
            <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: Utils.ScreenWidth(4), justifyContent: "space-between" }}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <Image style={{ width: 25, height: 25 }} source={ImagesPath.home.delete_icon} />
                <Text style={{ color: colors.red, fontWeight: '300', fontSize: 16, marginLeft:Utils.ScreenWidth(3),  }}>
                    Delete Account</Text>
                    </View>
                <Image style={{ width: 30, height: 30 }} source={ImagesPath.home.arrow_covered} />

            </View>
        </TouchableOpacity>
      

      
    </View>
                    <TouchableOpacity
                    onPress={()=>{
                        AsyncStorage.clear();
                        navigation.reset({
                        index: 0,
                        routes: [
                            { name: 'Splash' },
                        ],
                    });}}
                    style={{marginTop:Utils.ScreenHeight(4), width:Utils.ScreenWidth(50), alignSelf:"center"}}>
                        <View style={{height:Utils.ScreenHeight(5),backgroundColor:colors.primary, borderRadius:100, flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
                            <Text style={{color:colors.white , fontSize:18, fontWeight:500}}>Log out</Text>
                            <Image source={ImagesPath.sideMenu.logout_icon} style={{tintColor:colors.white}}/>
                        </View>

                    </TouchableOpacity>

                </ScrollView>

            </View>

        </SafeAreaView>
    )
}

export default Settings