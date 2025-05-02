import {Dimensions} from 'react-native';

const sizeWindow = Dimensions.get('window');

const sizeDefault = {
  width: 428,
  height: 926,
};
const ratioDefault = sizeDefault.height / sizeDefault.width;
const ratioCurrent = sizeWindow.height / sizeWindow.width;
const scaleVer = sizeWindow.height / sizeDefault.height;
const scaleHoz = sizeWindow.width / sizeDefault.width;
const Scale = (size: number) => {
  size = ratioCurrent <= 1.6 ? size / 2 : size;
  if (ratioCurrent > ratioDefault) {
    return Math.round(size * scaleVer);
  }
  return Math.round(size * scaleHoz);
};

export default Scale;
