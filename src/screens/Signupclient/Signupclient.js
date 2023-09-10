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

function SignUpclient(props) {
    const { navigation } = props;

    const [number, setNumber] = useState('');
    const [typeLogin, setTypeLogin] = useState('');
    const [loaderVisible, setLoaderVisible] = useState(false);
    const showLoader = () => setLoaderVisible(true);
    const hideLoader = () => setLoaderVisible(false);
    const [isChecked, setIsChecked] = useState(true);

    const signInApi = () => {
        if (!number) {
            // alert('Please enter your mobile number');
            alert('Please Enter your mobile number');
            return;
        } if (number.length < 10) {
            alert('Please enter your vaild mobile number');
            return;
        }
        if (isChecked === true) {
            alert('Please agree to terms and conditions first');
            return;
        }
        // navigation.navigate('OtpScreen')
        let formdata = new FormData();
        formdata.append('phone', number);
        formdata.append('country_code', '91');
        formdata.append('action', 'signup');

        showLoader(true)
        console.log('-----------formdata:: ', formdata);
        Helper.makeRequest({ url: ApiUrl.sendOtp, data: formdata, method: "FORMDATA" }).then((data) => {
            hideLoader(false)
            console.log('-----------res:: ', data);
            if (data.status === "success") {
                alert(data.message);
                // navigation.navigate('OtpScreen', { resData: data.data, providerKey: 1, action: 'signup' })
                // navigation.reset({
                //     routes: [{
                //         name: "OtpScreen",
                //         params: { resData: data.data, providerKey: "phone" }
                //     }],
                // });
            } else {
                alert(data.message)
                hideLoader(false)
            }
            Helper.showToast(data.message)

        }).catch(err => {
            console.log("----err::: ", err)
            alert(err.message)
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
                            <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>Phone</Text>
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
                            activeOpacity={0.5}
                            onPress={() => {
                                // signInApi()
                                navigation.navigate("Verifyotp",{phno:number})
                            }

                            }
                            style={{ flexDirection: 'row', justifyContent: 'center', width: Utils.ScreenWidth(90), backgroundColor:colors.primary, height: Utils.ScreenHeight(7), borderRadius: 13, marginTop: Utils.ScreenHeight(3) }}>
                            <View style={[styles.titleViewCss, { width: Utils.ScreenWidth(45) }]}>
                                {/* {loader ?<ActivityIndicator size={'small'} color={Colors.white} />} */}
                                <Text style={styles.titleCss}>Continue</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginLawyer')} style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: Utils.ScreenHeight(2) }}>
                        {/* <LinearGradient start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }} colors={['#018081', '#3683A9']} style={styles.linearGradient}> */}
                        <Text style={styles.buttonText}>
                            Already have an account?
                            <Text style={[styles.buttonText, { color: colors.primary }]}> Login</Text>
                        </Text>
                        {/* </LinearGradient> */}
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', margin: 10, alignSelf: 'center' }}>
                        {
                            isChecked ?
                                <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{ marginRight: 5 }}>
                                    <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={ImagesPath.onafterprint.uncheck_icon} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => setIsChecked(!isChecked)} style={{ marginRight: 5 }}>
                                    <Image style={{ width: 20, height: 20, resizeMode: 'contain' }} source={ImagesPath.onafterprint.check_primary} />
                                </TouchableOpacity>
                        }
                        <TouchableOpacity style={{ width: '90%' }}
                            onPress={() => {
                                navigation.navigate('Register')
                            }}
                        >
                            <Text style={{ fontSize: 14, fontWeight: '400', color: 'grey' }}>By clicking "Continue" or using the app, you acknowledge that you have read, understood and agree to abide by the terms and conditions.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* <Toast/>
            <CustomLoader loaderVisible={loaderVisible} /> */}
        </SafeAreaView>
    )
}

export default SignUpclient;