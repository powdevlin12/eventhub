import React, {ReactNode} from 'react';
import {StyleSheet, View} from 'react-native';
import {appColors} from '../../../common/constants/appColors';
import {Spacing} from '../../../common/utils';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../../../common/constants/screen-name';
import Row from './Row';
import Icon from '../../assets/svgs';

type ScreenComponentProps = {
  children: ReactNode;
  back?: (typeof SCREEN_NAME)[keyof typeof SCREEN_NAME];
};

const ScreenComponent = ({children, back}: ScreenComponentProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {back && (
        <Row onPress={() => navigation.navigate(back)} styles={styles.back}>
          <Icon name="Back" size={22} />
        </Row>
      )}
      {children}
    </View>
  );
};

export default ScreenComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  back: {
    paddingTop: Spacing(4),
    paddingHorizontal: Spacing(4),
  },
});
