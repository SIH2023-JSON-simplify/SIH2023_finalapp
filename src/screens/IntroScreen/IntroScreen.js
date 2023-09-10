import React from "react";

import { SafeAreaView, View } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Utils, colors } from "../../contants";
import ImagesPath from "../../assests/ImagesPath";


const OnboardWelcome = (props) => {
    const {navigation} = props
    return (
        <>
        <SafeAreaView style={{backgroundColor:colors.white}}/>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Image style={{ width: '100%', height: Utils.ScreenHeight(55) }} source={ImagesPath.LegalBridge.intro} />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 40 }}>
                
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('LoginLawyer')
                }}
                style={{ backgroundColor: colors.primary, width: '90%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop:Utils.ScreenHeight(5) }}>
                    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>Continue as Legal Service provider</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('Loginclient')
                }}
                style={{ backgroundColor: colors.primary, width: '90%', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: Utils.ScreenHeight(2) }}>
                    <Text style={{ fontSize: 16, fontWeight: '800', color: 'white' }}>Continue as a Client</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
        </>
    )
}
export default OnboardWelcome;