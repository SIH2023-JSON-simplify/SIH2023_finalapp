import React, { useState, useRef, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import colors from '../contants/colors';
import ImagesPath from '../assests/ImagesPath';

import { SideMenu } from '../screens/SideMenu';

import { Utils } from '../contants';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CalendarScreen from '../screens/Calendar/CalendarScreen';
import BareActs from '../screens/BareActs/BareActs';
import Clients from '../screens/Clients/Clients';
import { utils } from '@jest/reporters';
import Navigation from './Navigation';
import { useNavigation } from '@react-navigation/native';
import ClientHomeScreen from '../screens/ClientHomeScreen/ClientHomeScreen';
import ClientSearchScreen from '../screens/ClientSearchScreen/ClientSearchScreen';
import ClientProfileScreen from '../screens/ClientProfileScreen/ClientProfileScreen';
import Chatbot from '../screens/Chatbot/Chatbot';



const Tab = createBottomTabNavigator();
function ClientTabNavigator() {
    const RenderTabIcon = (props) => {
        const { activeIcon, inActiveIcon, title, isFocused } = props;
        return (
            <View style={isFocused ? tabStyles.imgViewOfTabs : tabStyles.viewOfTabs}>
                <Image
                    source={activeIcon}
                    style={[tabStyles.tabIconCss, { tintColor: isFocused ? colors.black : colors.grey, }]} />
                <Text style={[{ fontSize: 12, marginTop: Utils.ScreenHeight(0.6) }, { color: isFocused ? colors.primary : colors.grey, }]}>{title}</Text>
            </View>
        );
    }


    const RenderTabIconcenter = (props) => {
        const { activeIcon, inActiveIcon, title, isFocused } = props;
        return (
            <View style={{position:"absolute",backgroundColor:colors.chat, bottom:Utils.ScreenHeight(0.2), borderRadius:50, shadowColor:colors.blackdark,shadowOpacity:0.5,shadowOffset:5} }>
                <Image
                    source={activeIcon}
                    style={{ tintColor:colors.white,width:Utils.ScreenHeight(5), height:Utils.ScreenHeight(5),margin:Utils.ScreenHeight(1), resizeMode:"contain" }} />
                {/* <Text style={[{ fontSize: 12, marginTop: Utils.ScreenHeight(0.6) }, { color: isFocused ? colors.primary : colors.grey, }]}>{title}</Text> */}
            </View>
        );
    }
    const tabStyles = StyleSheet.create({
        viewOfTabs: {
            justifyContent: "center", alignItems: "center", marginTop: Utils.ScreenWidth(3)
        },
        imgViewOfTabs: {
            width: 62, height: 33, borderRadius: 15,
            justifyContent: "center", alignItems: "center", marginTop: Utils.ScreenWidth(3)
        },
        tabIconCss: {
            width: 23, height: 23, resizeMode: "contain",
        },
    });
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            screenOptions={{
                headerTitle: "",
                tabBarStyle:{height:Utils.ScreenHeight(10), paddingTop:Utils.ScreenHeight(1)}
             
            }}>
            <Tab.Screen

                name="ClientHomeScreen"
                component={ClientHomeScreen}
                options={{
                    headerTitle: "",
                headerLeft: (title) => {
                    return (
                        <Text style={{ color: colors.primary, fontSize: 20, fontWeight: 600, marginLeft: Utils.ScreenWidth(5) }}>LegalBridge</Text>
                    )
                },
                headerRight: () => {
                    return (
                        <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: Utils.ScreenWidth(5) }}>
                                <TouchableOpacity

                                >
                                    <Image source={ImagesPath.LegalBridge.bell} style={{
                                        resizeMode: 'contain',
                                        tintColor: colors.blackdark,


                                        height: Utils.ScreenWidth(6),
                                        width: Utils.ScreenWidth(6),
                                        marginRight: Utils.ScreenWidth(6)
                                    }} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("ClientSettings")
                                    }}>
                                    <Image source={ImagesPath.LegalBridge.settings} style={{
                                        resizeMode: 'contain',
                                        tintColor: colors.blackdark,
                                        height: Utils.ScreenWidth(6),
                                        width: Utils.ScreenWidth(6),
                                    }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                },
                    headerShown: true,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title="Home"
                                isFocused={focused}
                                activeIcon={ImagesPath.home.home_icon}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />

            <Tab.Screen
                name="ClientSearchScreen"
                component={ClientSearchScreen}
                options={{
                    headerTitle: "",
                headerLeft: (title) => {
                    return (
                        <Text style={{ color: colors.black, fontSize: 20, fontWeight: 600, marginLeft: Utils.ScreenWidth(5) }}>Search</Text>
                    )
                },
                headerRight: () => {
                    return (
                        <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: Utils.ScreenWidth(5) }}>
                                <TouchableOpacity

                                >
                                    <Image source={ImagesPath.LegalBridge.bell} style={{
                                        resizeMode: 'contain',
                                        tintColor: colors.blackdark,


                                        height: Utils.ScreenWidth(6),
                                        width: Utils.ScreenWidth(6),
                                        marginRight: Utils.ScreenWidth(6)
                                    }} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("ClientSettings")
                                    }}>
                                    <Image source={ImagesPath.LegalBridge.settings} style={{
                                        resizeMode: 'contain',
                                        tintColor: colors.blackdark,
                                        height: Utils.ScreenWidth(6),
                                        width: Utils.ScreenWidth(6),
                                    }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                },
                    headerShown: true,
                    tabBarLabel: '',
                    
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title="Search"
                                isFocused={focused}
                                activeIcon={ImagesPath.home.Search_primary}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Chatbot"
                component={Chatbot}
                options={{
                    headerTitle: "",
                headerLeft: (title) => {
                    return (
                        <Text style={{ color: colors.black, fontSize: 20, fontWeight: 600, marginLeft: Utils.ScreenWidth(5) }}>Legal Guru</Text>
                    )
                },
                headerRight: () => {
                    return (
                        <View style={{}}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: Utils.ScreenWidth(5) }}>
                                <TouchableOpacity

                                >
                                    <Image source={ImagesPath.LegalBridge.bell} style={{
                                        resizeMode: 'contain',
                                        tintColor: colors.blackdark,


                                        height: Utils.ScreenWidth(6),
                                        width: Utils.ScreenWidth(6),
                                        marginRight: Utils.ScreenWidth(6)
                                    }} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("ClientSettings")
                                    }}>
                                    <Image source={ImagesPath.LegalBridge.settings} style={{
                                        resizeMode: 'contain',
                                        tintColor: colors.blackdark,
                                        height: Utils.ScreenWidth(6),
                                        width: Utils.ScreenWidth(6),
                                    }} />
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                },
                    headerShown: true,
                    tabBarLabel: '',
                    
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIconcenter
                                title="Legal Guru"
                                isFocused={focused}
                                activeIcon={ImagesPath.LegalBridge.chat}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="BareActs"
                component={BareActs}
                options={{
                    headerLeft: (title) => {
                        return (
                            <Text style={{ color: colors.black, fontSize: 20, fontWeight: 600, marginLeft: Utils.ScreenWidth(5) }}>Bare Acts</Text>
                        )
                    },
                    headerRight: () => {
                        return (
                            <View style={{}}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: Utils.ScreenWidth(5) }}>
                                    <TouchableOpacity
    
                                    >
                                        <Image source={ImagesPath.LegalBridge.bell} style={{
                                            resizeMode: 'contain',
                                            tintColor: colors.blackdark,
    
    
                                            height: Utils.ScreenWidth(6),
                                            width: Utils.ScreenWidth(6),
                                            marginRight: Utils.ScreenWidth(6)
                                        }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            navigation.navigate("ClientSettings")
                                        }}>
                                        <Image source={ImagesPath.LegalBridge.settings} style={{
                                            resizeMode: 'contain',
                                            tintColor: colors.blackdark,
                                            height: Utils.ScreenWidth(6),
                                            width: Utils.ScreenWidth(6),
                                        }} />
                                    </TouchableOpacity>
                                </View>
    
                            </View>
                        )
                    },
                        headerShown: true,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title="Bare Acts"
                                isFocused={focused}
                                activeIcon={ImagesPath.home.man_icon}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />
            <Tab.Screen
                name="ClientProfileScreen"
                component={ClientProfileScreen}
                options={{
                    headerLeft: (title) => {
                        return (
                            <Text style={{ color: colors.black, fontSize: 20, fontWeight: 600, marginLeft: Utils.ScreenWidth(5) }}>Profile</Text>
                        )
                    },
                    headerRight: () => {
                        return (
                            <View style={{}}>
                                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginRight: Utils.ScreenWidth(5) }}>
                                    <TouchableOpacity
    
                                    >
                                        <Image source={ImagesPath.LegalBridge.bell} style={{
                                            resizeMode: 'contain',
                                            tintColor: colors.blackdark,
    
    
                                            height: Utils.ScreenWidth(6),
                                            width: Utils.ScreenWidth(6),
                                            marginRight: Utils.ScreenWidth(2)
                                        }} />
                                    </TouchableOpacity>
                                    
                                </View>
    
                            </View>
                        )
                    },
                        headerShown: true,
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => {
                        return (
                            <RenderTabIcon
                                title="Profile"
                                isFocused={focused}
                                activeIcon={ImagesPath.home.man_icon}
                            // inActiveIcon={ImagesPath.Tabbar.bottom_k}
                            // title={"Katlego"}
                            />
                        )
                    }
                }}
            />

        </Tab.Navigator>
    );


}

export default ClientTabNavigator;
// import { View, Text } from 'react-native'
// import React from 'react'

// const TabNavigator = () => {
//   return (
//     <View>
//       <Text>TabNavigator</Text>
//     </View>
//   )
// }

// export default TabNavigator
