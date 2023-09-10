import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { Utils, colors } from '../../contants'
import { useNavigation } from '@react-navigation/native'
import ImagesPath from '../../assests/ImagesPath'

const caseDetails = [
  'Property dispute case',
  'First hearing on',
  'Incomplete papers available',
];

const renderItem = ({ item }) => (
  <Text style={{ color: colors.grey, fontSize: 15, fontWeight: '600', marginTop: Utils.ScreenHeight(1) }}>
    • {item}
  </Text>
);


const ClientProfile = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
       <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
     <ScrollView style = {{backgroundColor: colors.white, height: '100%'}}>

     <View style = {{justifyContent: 'center', alignItems: 'center', height: Utils.ScreenHeight(6) }}>
        
      </View>
      <TouchableOpacity activeOpacity={0.3}
                        style={{
                            marginLeft: Utils.ScreenWidth(3),
                            alignItems: 'center',
                            elevation: 7,
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            justifyContent: 'center',
                            top: Utils.ScreenHeight(-3),
                            width: Utils.ScreenWidth(12),
                            height: Utils.ScreenHeight(6),}}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image source={ImagesPath.signUp.backIcon} 
                        style={{
                        resizeMode: 'contain',
                        height: Utils.ScreenWidth(4.8),
                        width: Utils.ScreenWidth(5.8),}} />
                    </TouchableOpacity>

          <View style={{flexDirection:"row", marginLeft:Utils.ScreenWidth(6) }}>
            <Image source={ImagesPath.home.manImg} style={{height:Utils.ScreenHeight(8), width:Utils.ScreenWidth(16), resizeMode:"contain"}}/>
             <View style={{marginLeft:Utils.ScreenWidth(4)}}>
                <Text style={{ color: colors.black, fontSize:16, fontWeight:"600", marginTop: Utils.ScreenHeight(0)}}>Rishabh Sinha</Text>
                <Text style={{ color: colors.newGrey, fontSize:12, fontWeight:"600"}}>UHID: 1234567891234</Text>
                <Text style={{ color: colors.newGrey, fontSize:12, fontWeight:"600"}}>20, Male</Text>
              </View>
          </View>

          <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(1) }} />
          </View>

        <View style = {{marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2), flexDirection: 'row', justifyContent:'space-between'}}>
          <View>
            <Text style={{ color: colors.grey, fontSize:15, fontWeight:"600", marginTop: Utils.ScreenHeight(0)}}>Contact Number:</Text>
            <Text style={{ color: colors.grey, fontSize:14, fontWeight:"600", marginTop: Utils.ScreenHeight(0)}}>8237856995</Text>
          </View>

          <View>
            <Text style={{ color: colors.grey, fontSize:15, fontWeight:"600", marginTop: Utils.ScreenHeight(0)}}>Email:</Text>
            <Text style={{ color: colors.grey, fontSize:14, fontWeight:"600", marginTop: Utils.ScreenHeight(0)}}>letsGoo@gmail.com</Text>
          </View>
        </View> 

        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(3) }} />
        </View>

        <View style = {{marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2)}}>
            <Text style={{ color: colors.grey, fontSize:15, fontWeight:"600", marginTop: Utils.ScreenHeight(0)}}>Address:</Text>
            <Text style={{ color: colors.grey, fontSize:14, fontWeight:"600", marginTop: Utils.ScreenHeight(1)}}>302/B, Harish paradise, Yashwant nagar, Mumbai 400054</Text>
        </View>

        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(3) }} />
        </View>

        <View style={{ marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(2) }}>
          <Text style={{ color: colors.grey, fontSize: 15, fontWeight: '600', marginTop: Utils.ScreenHeight(0) }}>Case Details:</Text>
          <FlatList
           data={caseDetails}
           renderItem={renderItem}
           keyExtractor={(item, index) => index.toString()}
           />
         </View>

        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(3) }} />
        </View>

        <TouchableOpacity style = {{marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(3)}}>
            <Text style={{ color: colors.grey, fontSize:17, fontWeight:"800", marginTop: Utils.ScreenHeight(0)}}>View Documents</Text>
        </TouchableOpacity>  

         <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(3) }} />
        </View>

        <TouchableOpacity style = {{marginHorizontal: Utils.ScreenWidth(6), marginTop: Utils.ScreenHeight(3)}}
        onPress = {() => {navigation.navigate('AddClient1')}}>
            <Text style={{ color: colors.grey, fontSize:17, fontWeight:"800", marginTop: Utils.ScreenHeight(0)}}>Case Details/ Charged Sheet</Text>
        </TouchableOpacity> 
        
        <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style = {{ backgroundColor: colors.grey2, width: '92%', height: Utils.ScreenHeight(0.1), marginTop: Utils.ScreenHeight(3) }} />
        </View>               

     </ScrollView>
    </SafeAreaView>
  )
}

export default ClientProfile