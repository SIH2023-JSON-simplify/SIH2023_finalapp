import React from "react";
import { StyleSheet } from "react-native";
import { Utils } from "../../contants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode:"contain",
        height:Utils.ScreenHeight(8),
        width:"100%",
        justifyContent:"center"
    },

});

export default styles;