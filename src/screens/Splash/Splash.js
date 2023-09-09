import { View, Text, StatusBar, ImageBackground, Image, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'


const Splash = () => {
  const navigation = useNavigation();
  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate("IntroScreen")
    }, 3000);
  },[])
  return (
    <SafeAreaView>
    <View style={{height:"100%", alignItems:"center", justifyContent:"center"}}>
      <Image source={ImagesPath.home.logo_primary} style={{
        resizeMode:"contain",
        height:Utils.ScreenHeight(35),
        width:"100%",
        justifyContent:"center",
        }}/>
    </View>
    </SafeAreaView>
  )
}

export default Splash