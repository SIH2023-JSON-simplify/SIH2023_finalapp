import { View, Text, StatusBar, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Utils, colors } from '../../contants'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ImagesPath from '../../assests/ImagesPath';
import { useNavigation } from '@react-navigation/native';

const AddClient1 = () => {
  const[name, setName] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
      <ScrollView style={{ backgroundColor: colors.white, height: '100%' }}>
        
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

                <Text style = {{fontWeight: 800, color: colors.black, fontSize: 23,
                                top: Utils.ScreenHeight(-1), 
                                marginHorizontal: Utils.ScreenWidth(3)}}>Add Client</Text>

                <View style = {{marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style = {{color: colors.green, fontSize: 14}}>• Client Info </Text>
                    <Text style = {{color: colors.black, fontSize: 14}}>• Client Info </Text>
                    <Text style = {{color: colors.black, fontSize: 14}}>• Client Info </Text>
                    <Text style = {{color: colors.black, fontSize: 14}}>• Client Info </Text>
                  </View>

                <View style = {{marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2)}}>
                  <Text style = {{fontWeight: 800, fontSize: 16, color: colors.black}}> First Name</Text>
                  <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={name}
                        onChange={(text) => setName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, color: colors.black, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter first name" />
                    </View>
                 </View>

                 <View style = {{marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2)}}>
                  <Text style = {{fontWeight: 800, fontSize: 16, color: colors.black}}> Last Name</Text>
                  <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={name}
                        onChange={(text) => setName(text)}
                        style={{ height: Utils.ScreenHeight(6), color: colors.black, borderColor: colors.newGrey,
                                 paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter last name" />
                  </View>
                </View>

                <View style = {{marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2)}}>
                  <Text style = {{fontWeight: 800, fontSize: 16, color: colors.black}}> Email</Text>
                  <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={name}
                        onChange={(text) => setName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2)}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter email" />
                  </View>
                </View>

                <View style = {{marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2)}}>
                  <Text style = {{fontWeight: 800, fontSize: 16, color: colors.black}}>Phone</Text>
                  <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={name}
                        onChange={(text) => setName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2),
                                 color: colors.black}}
                        placeholderTextColor={colors.newGrey} placeholder="Enter phone no." />
                  </View>
                </View>

                <View style = {{marginHorizontal: Utils.ScreenWidth(3), marginTop: Utils.ScreenHeight(2)}}>
                  <Text style = {{fontWeight: 800, fontSize: 16, color: colors.black}}>Date of Birth</Text>
                  <View style={{
                    marginTop: Utils.ScreenHeight(1),
                    borderRadius: 8, 
                    alignItems: "center", backgroundColor: colors.white, justifyContent: "space-evenly"
                }}>
                    <TextInput
                        value={name}
                        onChange={(text) => setName(text)}
                        style={{ height: Utils.ScreenHeight(6), borderColor: colors.newGrey, paddingHorizontal: Utils.ScreenWidth(3), width: '93%', 
                                 borderRadius: 8, borderWidth: Utils.ScreenWidth(0.2),
                                 color: colors.black}}
                        placeholderTextColor={colors.newGrey} placeholder="DD/MM/YYYY" />
                  </View>
                </View>

            <View style = {{ alignItems: 'center', marginTop: Utils.ScreenHeight(6), marginBottom: Utils.ScreenHeight(2)}}>
            <TouchableOpacity style = {{ backgroundColor: colors.primary,  
                                         borderRadius: 8,
                                         alignItems: 'center',
                                         justifyContent: 'center',
                                         height: Utils.ScreenHeight(7), 
                                         width: Utils.ScreenWidth(40)}} onPress = {() => { }}>
               <Text style = {{ color: colors.white, fontWeight: 400, fontSize: 16}}>
                 Next
               </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddClient1;
