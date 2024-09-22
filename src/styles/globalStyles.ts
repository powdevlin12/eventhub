import {TextStyle, ViewStyle} from 'react-native';
import {appColors} from '../constants/appColors';
import {fontFamilies} from '../constants/fontFamily';
import {Spacing} from '../utils';

const containerCommon: ViewStyle = {
  flex: 1,
  backgroundColor: appColors.white,
};

const paddingCommon: ViewStyle = {
  paddingHorizontal: Spacing(4),
  paddingTop: Spacing(3),
};

const textCommon: TextStyle = {
  fontFamily: fontFamilies.regular,
  fontSize: 14,
  color: appColors.text,
};

const gStyle = {
  containerCommon,
  paddingCommon,
  textCommon,
};

export {gStyle};
