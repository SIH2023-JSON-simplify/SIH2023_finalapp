import * as React from 'react';
import { Alert, Platform, Keyboard } from 'react-native';
import Config from "./Config";
// import { showMessage } from 'react-native-flash-message';
import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import notifee, { EventType,TimestampTrigger, TriggerType  }  from '@notifee/react-native';
// import Toast from 'react-native-toast-message';
import { Utils } from '../contants';


export default class Helper extends React.Component {
    static isNetConnected = false;
    static navigationRef;

    static registerNavigator(navigation) {
        Helper.navigationRef = navigation;
    }
    static async  onCreateTriggerNotification(interval, NoTitle,NoBody) {
        // const date = new Date(Date.now());
        // date.setHours(14);
        // date.setMinutes(24);
    
        // // Create a time-based trigger
        // const trigger: TimestampTrigger = {
        //   type: TriggerType.TIMESTAMP,
        //   timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
        // };
    
        // // Create a trigger notification
        // await notifee.createTriggerNotification(
        //   {
        //     title: 'Meeting with jlksdf',
        //     body: 'Today at 11:20am',
        //     android: {
        //       channelId: 'your-channel-id',
        //     },
        //   },
        //   trigger,
        // );
      }


     static showToast(msg ) {
        // Keyboard.dismiss();
        //     Toast.show({
        //         type: 'success',
        //         text1: msg,
        //         position:"top",
        //         topOffset: Utils.ScreenHeight(8),
                

        //     });
        alert(msg)
          

     }

    static capitalizeFirstLetter(name) {
        let splitStr = name.split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }

    static capitalizeFirstLetterComma(name) {
        let splitStr = name.split(',');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(',');
    }

    static logoutconfirm(title, alertMessage, cb) {
        Alert.alert(
            "Hi" + " " + title,
            alertMessage,
            [
                { text: "Cancel", onPress: () => { if (cb) cb(false); }, style: 'cancel' },
                { text: "OK", onPress: () => { if (cb) cb(true); console.log('OK Pressed') } },
            ],
            { cancelable: false }
        )
    }

    static async setData(key, val) {
        try {
            let tempval = JSON.stringify(val);
            await AsyncStorage.setItem(key, tempval);
        } catch (error) {
            // console.error("------error: ", error);
        }
    }

    static async getData(key) {
        try {
            let value = await AsyncStorage.getItem(key);
            if (value) {
                let newvalue = JSON.parse(value);
                return newvalue;
            } else {
                return value;
            }
        } catch (error) {
            console.error("------error: ", error);
        }
    }

    static async removeItemValue(key) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (exception) {
            return false;
        }
    }

    static confirmPopUp(alertMessage, cb) {
        Alert.alert(
            Config.app_name,
            alertMessage,
            [
                { text: 'YES', onPress: () => { if (cb) cb(true); console.log('OK Pressed') } },
                { text: 'NO', onPress: () => { if (cb) cb(false); }, style: 'cancel' },
            ],
            { cancelable: false }
        )
    }

    static CheckInternetConnection = async (callBack) => {
        await NetInfo.fetch().then(state => {
            // console.log("-----Internet Connection type: ", state.type);
            // console.log("-----Internet is connected? ", state.isConnected);
            if (state.isConnected) {
                callBack(true);
            } else {
                callBack(false);
            }
        }).catch((error) => {
            console.error('------Internet Connection error: ', error);
            callBack(false);
        });
    }

    static async makeRequest({ url, data, method = "POST", loader = true }) {
        await Helper.CheckInternetConnection((isNetConnected) => {
            if (isNetConnected) {
                Helper.isNetConnected = true;
            } else {
                Helper.isNetConnected = false;
            }
        });
       
        if (Helper.isNetConnected) {
            let finalUrl = Config.url + url;

            let form;
            let methodnew;
            // let token = await this.getData("token");
            let token = await this.getData("token");
            console.log("idar dekho  "+token);
            
            // console.log("-----token helper::: ", token)
            let varheaders;

            if (method == "POSTUPLOAD") {
                methodnew = "POST";
                varheaders = {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data;',
                    Authorization: 'Bearer ' + token
                }

                form = data;
            }
            else if (method == "POST") {
                methodnew = "POST";
                if (token) {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + token
                    }
                } else {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }

                form = JSON.stringify(data);
            }
            else if (method == "ROWDATA") {
                methodnew = "POST";
                if (token) {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + token
                    }
                } else {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }

                form = data;
            }
            else if (method == "PUT") {
                methodnew = "PUT";
                if (token) {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + token
                    }
                } else {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }

                form = JSON.stringify(data);
            }
            else if (method == "FORMDATA") {
                methodnew = "POST";
                if (token) {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                        "Authorization": 'Bearer ' + token
                    }
                } else {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data',
                    }
                }
                form = data;
            }
            else {
                methodnew = "GET";
                if (token) {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        "Authorization": 'Bearer ' + token
                    }
                } else {
                    varheaders = {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                }

            }

            console.log("---------Api finalUrl: ", finalUrl);
            console.log("---------Api form: ", form);

            return fetch(finalUrl, {
                body: form,
                method: methodnew,
                headers: varheaders,
            })
                .then((response) => {
                    return response.json();
                })
                .then((responseJson) => {
                    console.log("-------------responseJson: ", responseJson);
                    return responseJson;
                })
                .catch((error) => {
                    // this.showToast("Something went wrong");
                    console.log("------error: " + error);
                });
        } else {
            Helper.popUpNoInternet();
        }
    }

    static popUpNoInternet = () => {
        setTimeout(() => {
            Alert.alert(
                "No Internet",
                "Oops! It seems that you are not connected to the internet. Please check your internet connection and try again.",
                [
                    {
                        text: "OK", onPress: () => {
                            // Helper.popUpNoInternet();
                        }
                    },
                ],
                { cancelable: false }
            )
        }, 100);
    }
}