import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native'

const AddSchedule = () => {
    const navigation = useNavigation();
  return (
   <SafeAreaView style={{backgroundColor:colors.white}}>

     <View style={{ backgroundColor:colors.white,flexDirection: "row", marginHorizontal: Utils.ScreenWidth(4), alignItems: "center", }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Add Schedule</Text>

                </View>
    <View style={{flex:1, backgroundColor:colors.white}}>
        <ScrollView>
            
        </ScrollView>

    </View>


   </SafeAreaView>
  )
}

export default AddSchedule