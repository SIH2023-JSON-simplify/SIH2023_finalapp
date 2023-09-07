import React from "react";
import { StyleSheet } from "react-native";
import { colors, fonts } from "../../contants";
import Utils from "../../contants/Utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    backViewCss: {
        elevation: 10,
        backgroundColor: '#fff',
        borderRadius: 7,
        width: Utils.ScreenWidth(10),


        justifyContent: 'center', alignItems: "center",
        marginHorizontal: Utils.ScreenWidth(2),
    }
    ,
    backIconCss: {
        resizeMode: 'contain',
        height: Utils.ScreenWidth(4.8),
        width: Utils.ScreenWidth(5.8),
    },

    boxCss: {
        height: Utils.ScreenWidth(150),
        borderRadius: Utils.ScreenWidth(3.5),
        //elevation: 2, 
        alignSelf:'center',
        backgroundColor: 'white',
        //marginHorizontal: Utils.ScreenWidth(5.5),

    },
    logoIconCss: {
        alignSelf: 'center',
        resizeMode: 'stretch',
        height: Utils.ScreenHeight(12), // 40I
        width: Utils.ScreenWidth(28), // 95
        marginVertical: Utils.ScreenWidth(2)
    },
    OneHealth: {
        fontSize: Utils.ScreenWidth(1.7),
        textAlign: 'center', color: colors.primarydark,
        fontFamily: fonts.bold, marginTop: Utils.ScreenWidth(-11),
        left: Utils.ScreenWidth(2.3),
    },


    // ortext: {
    //     color: colors.black,
    //     fontSize: Utils.ScreenWidth(4.3),
    //     fontFamily: fonts.extraBold,
    // },
    // borderW: {
    //     borderBottomWidth: 0.3, width: Utils.ScreenWidth(33),
    //     marginVertical: Utils.ScreenWidth(9),
    // },
    // rowCss: {
    //     flexDirection: 'row', alignItems: 'center',
    //     alignSelf: 'center'
    // },
    // continuetext: {
    //     fontSize: Utils.ScreenWidth(3.4),
    //     textAlign: 'center',
    //     color: colors.blackdark,
    //     fontFamily: fonts.extraBold
    // },
    // linearGradient: {
    //     justifyContent: 'flex-end',
    //     height: Utils.ScreenWidth(18), justifyContent: 'center',
    //     alignItems: 'center',
    //     borderBottomRightRadius: Utils.ScreenWidth(3.5),
    //     borderBottomLeftRadius: Utils.ScreenWidth(3.5),
    //     marginTop: Utils.ScreenWidth(18),
    //     flexDirection: 'row'
    // },
    // buttonText: {
    //     color: colors.black,
    //     fontFamily: fonts.bold,
    //     fontSize: Utils.ScreenWidth(3.9)
    // },
    tbViewCss: {
        top: "79%",
        left: "54%",
        position: 'absolute',
    },
    tbIconCss: {
        width: Utils.ScreenWidth(45),
        height: Utils.ScreenWidth(45),
        resizeMode: 'contain',
    },
    Enter_OTP: {
        fontSize: Utils.ScreenWidth(6.0),
        fontFamily: fonts.semiBold,
        marginTop: Utils.ScreenWidth(14),
        color: colors.black,
    },
    verification: {
        fontSize: Utils.ScreenWidth(3.9), // 14,
        color: colors.grey,
        fontFamily: fonts.semiBold,
        marginVertical: Utils.ScreenWidth(3.5),
    },
    _viewOffInput: {
        // paddingHorizontal: 15, 
        // fontSize: 24,
        // color: colors.white,
        // height: 61,
        // width: 58,
        // shadowColor: '#000',
        // fontWeight: 'bold',
        borderWidth: 0.6,
        borderBottomWidth: 1,
        color: colors.blackdark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        borderRadius: 7
    },
    Resend: {
        color: colors.black,
        fontSize: Utils.ScreenWidth(3.9),
        fontFamily: fonts.bold,
        marginTop: Utils.ScreenWidth(7),
        textAlign: 'center',
    },
    titleViewCss: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleCss: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.9), // 14
    },

});

export default styles;