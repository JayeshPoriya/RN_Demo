//#region "Framework Dependencies "
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//#endregion "Framework Dependencies "
//#region "Project Dependencies "
import * as colorCode from '../../utils/ColorCodes.js';
//#endregion "Project Dependencies "

export default StyleSheet.create({
  container: {
    // flex: 1,
    margin: 5,
    backgroundColor: colorCode.WHITE,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  renderMainContainers: {
    // padding: wp('4%'),
    // marginTop: wp('2%'),
    // marginLeft: wp('2%'),
    // marginRight: wp('2%'),
    width: wp('25%'),
    height: wp('25%'),
    margin: wp('2%'),
    backgroundColor: colorCode.LIST_ITEM_BACKGROUND,
    flexDirection: 'row',
    borderRadius: wp('1%'),
    justifyContent: 'center',
  },
  itemIcon: {
    width: wp('15%'),
    height: wp('15%'),
    resizeMode: 'contain',
    // backgroundColor: 'red',
  },

  rightIcon: {
    width: wp('5%'),
    height: wp('5%'),
    resizeMode: 'contain',
    position: 'absolute',
    right: wp('2%'),
    top: wp('9%'),
  },
  titleContainer: {
    marginLeft: wp('4%'),
    flexDirection: 'column',
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: '500',
    marginBottom: wp('2%'),
    alignSelf: 'center',
  },
  subTitle: {
    fontSize: wp('4%'),
  },
  loader: {justifyContent: 'center', alignItems: 'center', flex: 1},
});
