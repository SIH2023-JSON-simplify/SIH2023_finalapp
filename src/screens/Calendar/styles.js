import React from "react";
import { StyleSheet } from "react-native";
import { Utils, colors, fonts } from "../../contants";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    headerViewCss: {
        flexDirection: 'row',
        height: Utils.ScreenWidth(15),
        marginTop: Utils.ScreenHeight(3),
        paddingHorizontal: Utils.ScreenWidth(3),
    },
    menuIconViewCss: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuIconCss: {
        width: Utils.ScreenWidth(3.3),
        height: Utils.ScreenWidth(3.5),
        resizeMode: 'cover',
    },
    titleCss: {
        fontWeight: '800',
        color: colors.white,
        fontFamily: fonts.extraBold,
        left: Utils.ScreenWidth(3),
        fontSize: Utils.ScreenWidth(4.36), // 18
    },
    switchViewCss: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    onlineTextCss: {
        color: colors.white,
        fontFamily: fonts.bold,
        marginLeft: 5,
        fontSize: Utils.ScreenWidth(3.4), // 14
    },
    bellIconViewCss: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bellIconCss: {
        width: Utils.ScreenWidth(5.4), // 21,
        height: Utils.ScreenWidth(6), //  24,
        resizeMode: 'contain',
        top: 2
    },
    lableConsultationViewCss: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: Utils.ScreenWidth(5),
        paddingTop: Utils.ScreenWidth(3),
    },
    lableConsultationCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(4.36), // 18
    },
    calenderIconCss: {
        resizeMode: 'contain',
        width: Utils.ScreenWidth(3.7),
        height: Utils.ScreenWidth(3.7),
    },
    daysMonthasViewCss: {
        // borderWidth: 1,
        // borderColor: colors.primary,
        width: Utils.ScreenWidth(10), // 105,
        height: Utils.ScreenWidth(15),
        marginRight: Utils.ScreenWidth(3),
        marginLeft: Utils.ScreenWidth(1),
        borderRadius: Utils.ScreenWidth(1),

        justifyContent: 'center', alignItems: 'center',
    },
    daysTextCss: {
        marginBottom: 2,
        fontFamily: fonts.extraBold,
        fontSize: Utils.ScreenWidth(3.3), // 15
    },
    monthsTextCss: {
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.8), // 16
        padding: 7,
        borderRadius: 15,
        marginVertical: 5
    },
    appointmentReqViewCss: {
        justifyContent: 'center',
        backgroundColor: '#FAF7F1',
        height: Utils.ScreenWidth(9),
        paddingHorizontal: Utils.ScreenWidth(5),
    },
    appointmentReqTextCss: {
        color: '#AC4911',
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.4), // 14
    },
    appointmentReqCardViewCss: {
        elevation: 5,
        backgroundColor: colors.white,
        // marginTop: Utils.ScreenWidth(4),
        borderColor: colors.inputColorP,
        borderRadius: Utils.ScreenWidth(2),
        marginVertical: Utils.ScreenWidth(2),
        marginHorizontal: Utils.ScreenWidth(4)
    },
    imgeViewCss: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgCss: {
        resizeMode: 'contain',
        width: Utils.ScreenWidth(16.5),
        height: Utils.ScreenWidth(16.8),
        borderRadius: Utils.ScreenWidth(2)
    },
    reqTitleCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.9), // 16
        marginBottom: Utils.ScreenWidth(0.5),
    },
    dateTimeReqTextCss: {
        color: "#2632386A",
        fontFamily: fonts.semiBold,
        fontSize: Utils.ScreenWidth(3.4), // 14
    },
    videoCallIconCss: {
        width: 15, height: 9,
        left: 10, top: 2,
        resizeMode: 'contain',
    },
    clinicIconCss: {
        width: 12, height: 12,
        left: 10,
        resizeMode: 'contain',
        tintColor: colors.grey
    },
    homeIconCss: {
        width: 17, height: 12,
        left: 10,
        resizeMode: 'contain',
        tintColor: colors.grey
    },
    audioIconCss: {
        width: 15, height: 10,
        left: 10,
        resizeMode: 'contain',
        tintColor: colors.grey
    },
    chatIconCss: {
        width: 15, height: 10,
        left: 10,
        resizeMode: 'contain',
        tintColor: colors.grey
    },
    acceptCancButViewCss: {
        flexDirection: 'row',
        marginTop: Utils.ScreenWidth(2),
        height: Utils.ScreenWidth(10),
    },
    acceptButViewCss: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primary,
        borderBottomLeftRadius: Utils.ScreenWidth(2),
        borderBottomRightRadius: Utils.ScreenWidth(2),
    },
    cancelButViewCss: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.primary,
        borderBottomRightRadius: Utils.ScreenWidth(2),
    },
    acceptCanButTextCss: {
        color: "#BD6330",
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.4), // 14
    },
    addQualifViewCss: {
        elevation: 5,
        alignItems: 'center',
        flexDirection: 'row',
        height: Utils.ScreenWidth(10),
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        borderRadius: Utils.ScreenWidth(2),
        marginVertical: Utils.ScreenWidth(3),
        marginHorizontal: Utils.ScreenWidth(4),
        paddingHorizontal: Utils.ScreenWidth(4),
    },
    addQualiTextCss: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.6), // 14
    },
    addIconCss: {
        resizeMode: 'contain',
        width: Utils.ScreenWidth(9),
        height: Utils.ScreenWidth(9),
    },
    ipsumViewCardCss: {
        elevation: 5,
        width: Utils.ScreenWidth(36.7), // 151, 
        backgroundColor: colors.white,
        marginLeft: Utils.ScreenWidth(2),
        marginRight: Utils.ScreenWidth(2),
        borderRadius: Utils.ScreenWidth(1.5),
        marginVertical: Utils.ScreenWidth(3),
    },
    ipsumIconCss: {
        resizeMode: 'cover',
        width: Utils.ScreenWidth(36.7), // 151,
        height: Utils.ScreenWidth(20.6), // 85,
        borderTopLeftRadius: Utils.ScreenWidth(1.5),
        borderTopRightRadius: Utils.ScreenWidth(1.5),
    },
    ipsumTextCss: {
        // left: 3,
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: Utils.ScreenWidth(3.1), // 14
        paddingVertical: Utils.ScreenWidth(2),
        paddingHorizontal: Utils.ScreenWidth(1.5),
    },
    option: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
    },
    selectedOption: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    text: {
        color: 'black',
        fontSize: 16,
    },
    selectedText: {
        color: 'white',
        fontSize: 16,
    },
    headerTextView: {
        width: '100%',
        height: Utils.ScreenHeight(7),
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerMainText:
    {
        color: colors.white,
        textAlign: 'center',
        fontSize: Utils.ScreenWidth(5),
        fontWeight: '600'
    },
    toggleMonthView: {
        width: '30%',
        height: Utils.ScreenHeight(3.7),
        borderWidth: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggleMonthText: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500'
    },
    modalMainViewCss: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#00000060'
    },
    modalCardViewCss: {
        width: "100%",
        height: Utils.ScreenWidth(50),
        backgroundColor: colors.white,
        borderRadius: Utils.ScreenWidth(2),
        //padding: 10
    },
    modalMainViewCss1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#00000060'
    },
    modalCardViewCss1: {
        width: "90%",
        height: Utils.ScreenWidth(75),
        backgroundColor: colors.white,
        borderRadius: Utils.ScreenWidth(2),
    },
    lebletextCss: {
        color: '#484848', // colors.black,
        alignSelf: 'center',
        fontFamily: fonts.extraBold,
        fontSize: Utils.ScreenWidth(5), // 20
    },
    takeViewCss: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Utils.ScreenWidth(14),
        borderBottomWidth: 1,
        borderBottomColor: colors.grey2,
    },
    closeButtonCss: {
        height: Utils.ScreenWidth(13),
        width: "90%",
        borderRadius: Utils.ScreenWidth(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        marginBottom: Utils.ScreenWidth(1.5),
    },
});

export default styles;