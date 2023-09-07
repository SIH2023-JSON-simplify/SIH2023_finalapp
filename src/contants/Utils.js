import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ScreenWidth = (width) => {
    return wp(width);
}

export const ScreenHeight = (height) => {
    return hp(height);
}

export default {
    ScreenWidth,
    ScreenHeight,
}