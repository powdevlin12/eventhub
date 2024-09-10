import {ViewStyle} from 'react-native';
import {appColors} from '../constants/appColors';
import {spacing} from '../utils/spacing';

const containerCommon: ViewStyle = {
  flex: 1,
  backgroundColor: appColors.white,
};

const paddingCommon: ViewStyle = {
  paddingHorizontal: spacing(4),
  paddingTop: spacing(3),
};

const gStyle = {
  containerCommon,
  paddingCommon,
};

export {gStyle};
