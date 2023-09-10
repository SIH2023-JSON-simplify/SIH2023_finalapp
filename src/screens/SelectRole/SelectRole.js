import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Utils, colors } from '../../contants'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import ImagesPath from '../../assests/ImagesPath'

const SelectRole = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
        <ScrollView style = {{backgroundColor: colors.white, height: '100%'}}>
            <View style = {{marginTop: Utils.ScreenHeight(10), alignItems: 'center'}}>
            <Text style ={{color: colors.black, fontWeight: 900, fontSize: 30}}>Select Role</Text>
            <TouchableOpacity style = {{backgroundColor: colors.primary, 
                           height: Utils.ScreenHeight(25), 
                           width: Utils.ScreenWidth(50),
                           borderRadius: 15,
                           alignItems: 'center',
                           justifyContent: 'center', 
                           marginTop: Utils.ScreenHeight(10)}}>
                <Image source = {ImagesPath.home.user_profile}
                        style = {{height: Utils.ScreenHeight(16), 
                                 resizeMode:"contain",
                                 tintColor: colors.white}}/>
                <Text style = {{fontWeight: 900, color: colors.white, fontSize: 20, marginTop: Utils.ScreenHeight(2) }}>USER</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {{backgroundColor: colors.primary, 
                           height: Utils.ScreenHeight(25), 
                           width: Utils.ScreenWidth(50),
                           borderRadius: 15,
                           alignItems: 'center',
                           justifyContent: 'center', 
                           marginTop: Utils.ScreenHeight(10)}}
                           onPress = {() => { navigation.navigate('LoginLawyer')}}>
                <Image source = {ImagesPath.home.user_profile}
                        style = {{height: Utils.ScreenHeight(16), 
                                 resizeMode:"contain",
                                 tintColor: colors.white}}/>
                <Text style = {{fontWeight: 900, color: colors.white, fontSize: 20, marginTop: Utils.ScreenHeight(2) }}>ADVOCATE</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SelectRole