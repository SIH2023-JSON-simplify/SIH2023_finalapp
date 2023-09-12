import { View, Text, SafeAreaView, Image, ScrollView, ActivityIndicator, Modal, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ImagesPath from '../../assests/ImagesPath'
import { Utils, colors } from '../../contants'
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native'
import ApiUrl from '../../Lib/ApiUrl'
import Helper from '../../Lib/Helper'
import {WebView} from "react-native-webview"
import MyWebComponent from '../../component/MyWebComponent'
// import { CachedImage } from 'react-native-cached-image';
const CheckStatus = () => {
    const [expense, setExpense] = useState([
        { label: 'Kalyan, Railway Court', value: 1 },
        { label: 'Thane, District and Sessions Court', value: 2},
        { label: "Shahapur, Civil and Criminal Court", value: 3},
        { label: "Palghar, District and Addl Session", value: 3},
        { label: "Vasai, District and Addl Sessions", value: 3},
        { label: "Bhiwandi, Civil and Criminal Court", value: 3},
        { label: "Dahanu, Civil and Criminal Court", value: 3},

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
    const[cap,setcap] = useState();
    const[tempe,settempe] = useState(true);
    const[visible,setVisible] = useState(false);
    const openLinkInWebView = () => setVisible(true);
    const getcaptcha =()=>{
        let formdata = new FormData();

        Helper.makeRequest({ url: ApiUrl.getcaptcha,data:formdata,  method: "GET" }).then((data) => {

            // console.log('-----------res:: ', data?.image_url);
            const url = data?.image_url
            setcap(url)
            // temp()
            // Helper.showToast(data.message)
            openLinkInWebView()

        }).catch(err => {
            console.log("----err::: ", err)
            // Helper.showToast(err.message)

        })

    }

    const submit =()=>{
        let formdata = new FormData();
        const data = {
            "case_no":"3488",
            "year":"2021",
            "captcha":captcha
        }

        Helper.makeRequest({ url: ApiUrl.getcase,data:data,  method: "POST" }).then((data) => {

            // console.log('-----------res:: ', data?.image_url);
            // setcap(data?.image_url)
            // temp()
            // Helper.showToast(data.message)
            console.log(JSON.stringify(data))
            navigation.navigate("caseresults",{casedata:JSON.stringify(data)})
        }).catch(err => {
            console.log("----err::: ", err)
            // Helper.showToast(err.message)

        })

    }

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {

    //     });
    //     console.log("useeff called ");
    //     return unsubscribe;
    // }, []);
    const temp =()=>{
        settempe(false)

    }
    

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
                 {/* <Text style={{fontWeight:700, fontSize:Utils.ScreenHeight(2), marginBottom:Utils.ScreenHeight(1), marginTop:Utils.ScreenHeight(3)}}>Case Type</Text>
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
                /> */}
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
                    {/* {cap && (
                        <Image
                            source={{ uri: cap }}
                            style={{
                            width: Utils.ScreenWidth(30),
                            height: Utils.ScreenHeight(8),
                            resizeMode: "contain",
                            borderWidth: 0.5,
                            borderColor: colors.grey,
                            marginTop: Utils.ScreenHeight(4),
                            }}
                        />
                        )} */}
                {/* <Image source={{uri:cap}} style={{width:Utils.ScreenWidth(30), height:Utils.ScreenHeight(8), resizeMode:"contain", borderWidth:0.5 , borderColor:colors.grey, marginTop:Utils.ScreenHeight(4)}}/> */}
                    <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-end"}}>
                 <View>
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
                     <TouchableOpacity 
                    onPress={()=>{
                        
                        getcaptcha()}}
                    style={{height:Utils.ScreenHeight(4),
                        borderRadius:10,alignSelf:"center",
                        width:Utils.ScreenWidth(25), backgroundColor:colors.primary, marginLeft:Utils.ScreenWidth(3)}}>
                            <Text
                            style={{fontWeight:400,
                                color:colors.white, alignSelf:"center",
                                fontSize:Utils.ScreenHeight(1.5), marginBottom:Utils.ScreenHeight(1),marginTop:Utils.ScreenHeight(1)}}
                            >View Captcha</Text>
                    </TouchableOpacity>

                </View>


                </View>
                    <TouchableOpacity 
                    onPress={()=>{
                        
                        submit()}}
                    style={{height:Utils.ScreenHeight(6),
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
            {/* <Modal
        visible={visible}
        presentationStyle={'pageSheet'}
        animationType={'slide'}
        onRequestClose={() => setVisible(!visible)}
      >
        <WebView source={{ uri: cap }} />
      </Modal> */}

    {/* <Text onPress={getcaptcha}>kjfdshkj</Text> */}
        {/* <Modal
        visible={visible}
        presentationStyle={'pageSheet'}
        animationType={'slide'}
        onRequestClose={() => setVisible(!visible)}>
        <WebView 
        source={{ uri: cap }} 
        />
    </Modal> */}
            
    </SafeAreaView>
  )
}

export default CheckStatus