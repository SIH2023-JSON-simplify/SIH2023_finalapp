import React, {useState} from 'react';
import { View, Text, StatusBar, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Utils, colors } from '../../contants';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';
import { useNavigation } from '@react-navigation/native';
import AddCases from './AddCases';

export default function Cases() {

  const navigation = useNavigation();
  const[searchText,setSearchtext] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />

      <View>
      <TouchableOpacity activeOpacity={0.3}
                        style={{
                            marginLeft: Utils.ScreenWidth(3),
                            alignItems: 'center',
                            elevation: 7,
                            backgroundColor: '#fff',
                            borderRadius: 8,
                            justifyContent: 'center',
                            top: Utils.ScreenHeight(3),
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
                    <View style = {{alignItems: 'center', top: Utils.ScreenHeight(-3)}}>
                    <Text style = {{fontWeight: 900, fontSize: 18, color: colors.black, alignItems: 'center', justifyContent: 'center'}}>Cases</Text>
             </View>
        </View>


  <ScrollView
        style={{ flex: 1, backgroundColor: colors.white }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{
                    marginTop: Utils.ScreenHeight(2),
                    height: Utils.ScreenHeight(6),
                    borderRadius: 8, 
                    borderWidth: 0.5,
                    borderColor: colors.primary,
                    marginHorizontal: Utils.ScreenWidth(4), flexDirection: "row", alignItems: "center", backgroundColor: colors.secondary, justifyContent: "space-evenly"
                }}>
                    <Image source={ImagesPath.LegalBridge.search} style={{ resizeMode: "contain", height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3) }} />
                    <TextInput
                        value={searchText}
                        onChange={(text) => setSearchText(text)}
                        style={{ height: Utils.ScreenHeight(5), borderColor: colors.primary, paddingHorizontal: Utils.ScreenWidth(2), width: Utils.ScreenWidth(55), borderRadius: 5 }}
                        placeholderTextColor={'grey'} placeholder="Case ID number" />
                    <TouchableOpacity style={{ paddingHorizontal: 10 }}>
                        <Image style={{ height: Utils.ScreenHeight(3), width: Utils.ScreenHeight(3), resizeMode: 'contain', tintColor: colors.primary }} source={ImagesPath.home.filter_icon} />
                    </TouchableOpacity>
                </View>


<TouchableOpacity style={{
  marginTop: Utils.ScreenHeight(4),
  height: Utils.ScreenHeight(10),
  borderRadius: 8, 
  borderWidth: 0.5,
  borderColor: colors.primary,
  marginBottom: Utils.ScreenHeight(1.5),
  marginHorizontal: Utils.ScreenWidth(4),
  flexDirection: "row",
  backgroundColor: colors.greyNoti,
  justifyContent: "space-between",
  alignItems: "flex-start",
}}
onPress = {() => {navigation.navigate('AddCases')}}>
  <View>
    <Text style={{ fontWeight: '500', fontSize: 11,
                  color: colors.grey, marginHorizontal: Utils.ScreenHeight(1), marginTop: Utils.ScreenHeight(0.5) }}>
      CID: 1234567891234
    </Text>

  <View style = {{flexDirection: 'row', }}>
    <View>
      <Text style = {{fontWeight: 900, fontSize: 14, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2), marginTop: Utils.ScreenHeight(1)}}> XYZ Murder Case</Text>
      <Text style = {{fontWeight: 400, fontSize: 12, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2)}}> By: Rishabh Sinha</Text>
    </View>

    <View style={{ marginLeft: Utils.ScreenWidth(8), backgroundColor: colors.secondary, height: Utils.ScreenHeight(5), borderRadius: 8, marhinHorizontal: Utils.ScreenHeight(1),
       width: Utils.ScreenWidth(25), alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <Text style ={{color: colors.black}}>Processing</Text>
   </View>

   <View>
       <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
   </View>
  </View>
  </View>
</TouchableOpacity>


<TouchableOpacity style={{
  marginTop: Utils.ScreenHeight(0.5),
  height: Utils.ScreenHeight(10),
  borderRadius: 8, 
  borderWidth: 0.5,
  borderColor: colors.primary,
  marginBottom: Utils.ScreenHeight(1.5),
  marginHorizontal: Utils.ScreenWidth(4),
  flexDirection: "row",
  backgroundColor: colors.greyNoti,
  justifyContent: "space-between",
  alignItems: "flex-start",
}}>
  <View>
    <Text style={{ fontWeight: '500', fontSize: 11,
                  color: colors.grey, marginHorizontal: Utils.ScreenHeight(1), marginTop: Utils.ScreenHeight(0.5) }}>
      CID: 1234567891234
    </Text>

  <View style = {{flexDirection: 'row', }}>
    <View>
      <Text style = {{fontWeight: 900, fontSize: 14, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2), marginTop: Utils.ScreenHeight(1)}}> XYZ Murder Case</Text>
      <Text style = {{fontWeight: 400, fontSize: 12, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2)}}> By: Rishabh Sinha</Text>
    </View>

    <View style={{ marginLeft: Utils.ScreenWidth(8), backgroundColor: colors.secondary, height: Utils.ScreenHeight(5), borderRadius: 8, marhinHorizontal: Utils.ScreenHeight(1),
       width: Utils.ScreenWidth(25), alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <Text style ={{color: colors.black}}>Processing</Text>
   </View>

   <View>
       <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
   </View>
  </View>
  </View>
</TouchableOpacity>


<TouchableOpacity style={{
  marginTop: Utils.ScreenHeight(0.5),
  height: Utils.ScreenHeight(10),
  borderRadius: 8, 
  borderWidth: 0.5,
  borderColor: colors.primary,
  marginBottom: Utils.ScreenHeight(1.5),
  marginHorizontal: Utils.ScreenWidth(4),
  flexDirection: "row",
  backgroundColor: colors.greyNoti,
  justifyContent: "space-between",
  alignItems: "flex-start",
}}>
  <View>
    <Text style={{ fontWeight: '500', fontSize: 11,
                  color: colors.grey, marginHorizontal: Utils.ScreenHeight(1), marginTop: Utils.ScreenHeight(0.5) }}>
      CID: 1234567891234
    </Text>

  <View style = {{flexDirection: 'row', }}>
    <View>
      <Text style = {{fontWeight: 900, fontSize: 14, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2), marginTop: Utils.ScreenHeight(1)}}> XYZ Murder Case</Text>
      <Text style = {{fontWeight: 400, fontSize: 12, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2)}}> By: Rishabh Sinha</Text>
    </View>

    <View style={{ marginLeft: Utils.ScreenWidth(8), backgroundColor: colors.secondary, height: Utils.ScreenHeight(5), borderRadius: 8, marhinHorizontal: Utils.ScreenHeight(1),
       width: Utils.ScreenWidth(25), alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <Text style ={{color: colors.black}}>Processing</Text>
   </View>

   <View>
       <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
   </View>
  </View>
  </View>
</TouchableOpacity>

<TouchableOpacity style={{
  marginTop: Utils.ScreenHeight(0.5),
  height: Utils.ScreenHeight(10),
  borderRadius: 8, 
  borderWidth: 0.5,
  borderColor: colors.primary,
  marginBottom: Utils.ScreenHeight(1.5),
  marginHorizontal: Utils.ScreenWidth(4),
  flexDirection: "row",
  backgroundColor: colors.greyNoti,
  justifyContent: "space-between",
  alignItems: "flex-start",
}}>
  <View>
    <Text style={{ fontWeight: '500', fontSize: 11,
                  color: colors.grey, marginHorizontal: Utils.ScreenHeight(1), marginTop: Utils.ScreenHeight(0.5) }}>
      CID: 1234567891234
    </Text>

  <View style = {{flexDirection: 'row', }}>
    <View>
      <Text style = {{fontWeight: 900, fontSize: 14, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2), marginTop: Utils.ScreenHeight(1)}}> XYZ Murder Case</Text>
      <Text style = {{fontWeight: 400, fontSize: 12, color: colors.grey, marginHorizontal: Utils.ScreenHeight(2)}}> By: Rishabh Sinha</Text>
    </View>

    <View style={{ marginLeft: Utils.ScreenWidth(8), backgroundColor: colors.secondary, height: Utils.ScreenHeight(5), borderRadius: 8, marhinHorizontal: Utils.ScreenHeight(1),
       width: Utils.ScreenWidth(25), alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
      <Text style ={{color: colors.black}}>Processing</Text>
   </View>

   <View>
       <Image source={ImagesPath.home.three_dots} style={{height:Utils.ScreenHeight(4), width:Utils.ScreenWidth(14), resizeMode:"contain"}}/>
   </View>
  </View>
  </View>
</TouchableOpacity>

        
      </ScrollView>
    </SafeAreaView>
  );
}
