import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native'
const CheckStatus = () => {
    const [expense, setExpense] = useState([
        { label: 'Borivali', value: 1 },
        { label: 'Andheri', value: 2},
        { label: "Vasai", value: 3},
    ]);
    const [openExpense, setOpenExpense] = useState(false);
    const [valueGender, setValueGender] = useState(null);
    const [casetype, setcasetype] = useState([
        { label: 'Criminal', value: 1 },
        { label: 'Family', value: 2},
        { label: "Consumer", value: 3},
    ]);
    const [opencasetype, setopencasetype] = useState(false);
    const [value, setValue] = useState(null);
    const [casenumber, setcasenumber] = useState();
    const [year, setyear] = useState();
    const [captcha, setcaptcha] = useState();
    const navigation = useNavigation()
  return (
    <SafeAreaView style={{backgroundColor:colors.white, flex:1}}>

        <View style={{ flexDirection: "row", marginHorizontal: Utils.ScreenWidth(4), alignItems: "center",backgroundColor:colors.white,  }}>
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}>
                        <Image source={ImagesPath.signUp.backIcon} style={{ height: Utils.ScreenHeight(4), width: Utils.ScreenWidth(5), tintColor: colors.blackdark, resizeMode: "contain" }} />
                    </TouchableOpacity>
                    <Text style={{ flex: 1, textAlign: "center", marginRight: Utils.ScreenWidth(5), fontSize: 20, fontWeight: "600" }}>Case Status</Text>
                </View>
            <ScrollView>
                <View style={{marginTop:Utils.ScreenHeight(5), marginHorizontal:Utils.ScreenWidth(5)}}>
                <Text style={{fontWeight:700, fontSize:Utils.ScreenHeight(2), marginBottom:Utils.ScreenHeight(1)}}>Court Complex</Text>
                <DropDownPicker
                    dropDownDirection="BOTTOM"
                    zIndex={8000}
                    open={openExpense}
                    items={expense}
                    value={valueGender}
                    listMode="SCROLLVIEW"
                    setItems={setExpense}
                    setValue={setValueGender}
                    setOpen={setOpenExpense}
                    disableBorderRadius={true}
                    placeholder={''}
                    maxHeight={Utils.ScreenWidth(48)}
                    style={{borderColor:colors.grey2, }}
                    labelStyle={{ color: colors.primary }}
                  dropDownContainerStyle={{borderColor:colors.grey2}}
                    scrollViewProps={{ nestedScrollEnabled: true, }}
                />
                 <Text style={{fontWeight:700, fontSize:Utils.ScreenHeight(2), marginBottom:Utils.ScreenHeight(1), marginTop:Utils.ScreenHeight(3)}}>Case Type</Text>
                <DropDownPicker
                    dropDownDirection="BOTTOM"
                    zIndex={5000}
                    open={opencasetype}
                    items={casetype}
                    value={value}
                    listMode="SCROLLVIEW"
                    setItems={setExpense}
                    setValue={setValue}
                    setOpen={setopencasetype}
                    disableBorderRadius={true}
                    placeholder={''}
                    maxHeight={Utils.ScreenWidth(48)}
                    style={{borderColor:colors.grey2, }}
                    labelStyle={{ color: colors.primary }}
                  dropDownContainerStyle={{borderColor:colors.grey2}}
                    scrollViewProps={{ nestedScrollEnabled: true, }}
                />
                 <Text style={{fontWeight:700, fontSize:Utils.ScreenHeight(2), marginBottom:Utils.ScreenHeight(1),marginTop:Utils.ScreenHeight(3)}}>Case Number</Text>
                 <TextInput
                    keyboardType="number-pad"
                    value={casenumber}
                    style={{borderWidth:1 ,height:Utils.ScreenHeight(5), borderColor:colors.grey2, borderRadius:5}}
                    placeholderTextColor={'grey'} placeholder="" 
                    onChangeText={(text) => {setcasenumber(text)}}
                    />

                <Text style={{fontWeight:700, fontSize:Utils.ScreenHeight(2), marginBottom:Utils.ScreenHeight(1),marginTop:Utils.ScreenHeight(3)}}>Year</Text>
                 <TextInput
                    keyboardType="number-pad"
                    value={year}
                    style={{borderWidth:1 ,height:Utils.ScreenHeight(5), borderColor:colors.grey2, borderRadius:5, width:Utils.ScreenWidth(30)}}
                    placeholderTextColor={'grey'} placeholder="" 
                    onChangeText={(text) => {setyear(text)}}
                    />
                <Image source={ImagesPath.LegalBridge.captcha} style={{width:Utils.ScreenWidth(30), height:Utils.ScreenHeight(8), resizeMode:"contain", borderWidth:0.5 , borderColor:colors.grey, marginTop:Utils.ScreenHeight(4)}}/>
                <Text style={{fontWeight:700, fontSize:Utils.ScreenHeight(2), marginBottom:Utils.ScreenHeight(0),marginTop:Utils.ScreenHeight(1)}}>Enter Captcha</Text>
                 <TextInput

                    value={captcha}
                    style={{borderWidth:1 ,marginTop:Utils.ScreenHeight(1),
                        height:Utils.ScreenHeight(5), borderColor:colors.grey2,
                         borderRadius:5, width:Utils.ScreenWidth(30)}}
                    placeholderTextColor={'grey'} placeholder="" 
                    onChangeText={(text) => {setcaptcha(text)}}
                    />


                </View>
                    <TouchableOpacity style={{height:Utils.ScreenHeight(6),
                        borderRadius:10,marginTop:Utils.ScreenHeight(4),alignSelf:"center",
                        width:Utils.ScreenWidth(40), backgroundColor:colors.primary}}>
                            <Text
                            style={{fontWeight:400,
                                color:colors.white, alignSelf:"center",
                                fontSize:Utils.ScreenHeight(3), marginBottom:Utils.ScreenHeight(0),marginTop:Utils.ScreenHeight(1)}}
                            >Go</Text>
                    </TouchableOpacity>
                    <View style={{height:Utils.ScreenHeight(30)}}></View>
            </ScrollView>

    </SafeAreaView>
  )
}

export default CheckStatus