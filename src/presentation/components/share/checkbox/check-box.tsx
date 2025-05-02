import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from '../../../assets/svgs';
import {Spacing} from '../../../common/utils';

const CheckBox = () => {
  return (
    <View style={styles.container}>
      <Icon name="Check" size={22} />
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: Spacing(2),
    borderWidth: 2,
    borderColor: 'grey',
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
