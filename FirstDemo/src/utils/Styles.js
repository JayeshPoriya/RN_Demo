//#region " Framework Dependencies "

import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//#endregion " Framework Dependencies "
//#region "Project Dependencies "
import * as colorCode from './ColorCodes.js';
//#endregion "Project Dependencies "

export default StyleSheet.create({
  rightIcon: {
    width: wp('5%'),
    height: wp('5%'),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  rightButtonContainer: {
    width: wp('10%'),
    height: wp('10%'),
    justifyContent: 'center',
  },
});
