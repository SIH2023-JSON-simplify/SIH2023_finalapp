import React, { useEffect, useRef, useState } from "react";
import { View, Text, Keyboard, Image, ScrollView, StatusBar, TouchableOpacity, TextInput, Platform, SafeAreaView } from 'react-native';
import styles from "./styles";
import Helper from "../../Lib/Helper";
import ApiUrl from "../../Lib/ApiUrl";
import { colors } from "../../contants";
import Utils from "../../contants/Utils";
import ImagesPath from "../../assests/ImagesPath";
// import AppButton from "../../component/AppButton";
// import CustomLoader from "../../component/CustomLoader";
// import LinearGradient from 'react-native-linear-gradient';
// import { strings } from "../LanguageScreen/StringsOfLanguages";
// import { Toast } from "react-native-toast-message/lib/src/Toast";

function SignInPhone(props) {
    const { navigation } = props;

    const [number, setNumber] = useState('');
    const [typeLogin, setTypeLogin] = useState('');
    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [invalidCount, setInvalidCount] = useState(0)
    const [isChecked, setIsChecked] = useState(true);


    const signInApi = () => {
        if (!number) {
            // alert('Please enter your phone number');
            Helper.showToast('Please enter a valid number')
           // alert(');
           // Helper.showToast('Please enter a valid number');
            return;
        } if (number.length < 10 && invalidCount < 5) {
            Helper.showToast('Please enter your vaild phone number')
            //alert();
           // Helper.showToast('Please enter your vaild phone number');
            setInvalidCount(invalidCount + 1)
            return;
        }
        if (number === '0000000000') {

            Helper.showToast('Please enter your vaild phone number');
            return;
        }

        if (invalidCount >= 5) {
            alert('You have exceeded too many invalid log in attempts please try after 1 hours');
           // Helper.showToast('You have exceeded too many invalid log in attempts please try after 1 hours');
            return;
        }
        // navigation.navigate('OtpScreen')
        let formdata = new FormData();
        formdata.append('phone', number);
        formdata.append('country_code', '91');
        formdata.append('action', 'login');
        const body ={
            "mobile_no": number,
            "action":   "login",
        }
        // showLoader(true)
        console.log('body ', formdata);
        Helper.makeRequest({ url: ApiUrl.generateotp, data: body, method: "POST" }).then((data) => {
            hideLoader(false)
            console.log('-----------res:: ', data);
            navigation.navigate("Verifyotp",{phno:number})
            if (data.status === "success") {
                
                Helper.showToast(data.message)

               // Helper.showToast(data.message);
                
              
            } else {
                alert(data.message)
              //  Helper.showToast(data.message)
                hideLoader(false)
            }
            // Helper.showToast(data.message)
        }).catch(err => {
            console.log("----err::: ", err)
            // Helper.showToast(err.message)
            hideLoader(false)
        })
    }

    const handleInput = (text) => {
        setNumber(text.replace(/[^0-9]/g, ''))
        if (text.length === 10) {
            Keyboard.dismiss();
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor={colors.white} barStyle="dark-content" />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <TouchableOpacity activeOpacity={0.3}
                        style={styles.backViewCss}
                        onPress={() => {
                            navigation.goBack()
                        }}>
                        <Image source={ImagesPath.signUp.backIcon} style={styles.backIconCss} />
                    </TouchableOpacity>
                    <View style={{ alignSelf: 'center', width: '70%', alignItems: 'center' }}>
                        <Image style={[styles.logoIconCss]} source={ImagesPath.home.logo_primary} />
                    </View>
                </View>
                <View style={styles.boxCss}>
                    <View style={{ marginTop: Utils.ScreenWidth(9), marginHorizontal: Utils.ScreenWidth(4.5), }}>
                        <View style={{ marginTop: Utils.ScreenHeight(2), marginLeft: Utils.ScreenWidth(2) }}>
                            <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>Login with OTP</Text>
                        </View>
                        <View style={styles.inputViewCss}>
                            <View style={styles.couterCodeViewCss}>
                                <Text style={styles.couterCodeCss}>+91</Text>
                            </View>
                            <View>
                                <TextInput
                                    maxLength={10}
                                    value={number}
                                    keyboardType="phone-pad"
                                    style={styles.inputStylesCss}
                                    onChangeText={(text) => { handleInput(text) }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            onPress={() => 
                              {
                                signInApi()
                            //   navigation.navigate("Verifyotp",{phno:number})
                        }
                            }
                            activeOpacity={0.5}
                            style={{ flexDirection: 'row', justifyContent: 'center', width: Utils.ScreenWidth(90), backgroundColor: colors.primary, height: Utils.ScreenHeight(7), borderRadius: 13, marginTop: Utils.ScreenHeight(3) }}>
                            <View style={[styles.titleViewCss, { width: Utils.ScreenWidth(45) }]}>
                                {/* {loader ?<ActivityIndicator size={'small'} color={Colors.white} />} */}
                                <Text style={styles.titleCss}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: Utils.ScreenHeight(2) }}>
                        {/* <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#018081', '#3683A9']} style={styles.linearGradient}> */}
                        <Text style={styles.buttonText}>
                            Dont have an account?
                            <Text style={[styles.buttonText, { color: colors.primary }]}> Signup</Text>
                        </Text>
                        {/* </LinearGradient> */}
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* <Toast/>
            <CustomLoader loaderVisible={loaderVisible} /> */}
            <TouchableOpacity onPress={()=>
            {navigation.navigate("Verifyotp",{phno:number})}}><Text>testings</Text></TouchableOpacity>
        </SafeAreaView>
    )
}

export default SignInPhone;