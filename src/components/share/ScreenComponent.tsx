import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../../constants/appColors';
import {SCREEN_NAME} from '../../constants/screen';

type ScreenComponentProps = {
  children: ReactNode;
  back?: keyof typeof SCREEN_NAME;
};

const ScreenComponent = ({children, back}: ScreenComponentProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
});
