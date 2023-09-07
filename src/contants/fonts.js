import { Platform } from "react-native";

const fonts = Platform.select({
    ios: {
        regular: 'Roboto-Light',
        semiBold: 'Roboto-Regular',
        bold: 'Roboto-Medium',
        extraBold: 'Roboto-Bold',
    },
    android: {
        regular: 'Roboto-Light',
        semiBold: 'Roboto-Regular',
        bold: 'Roboto-Bold',
        extraBold: 'Roboto-Medium',
    },
});

export default fonts;