import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';

type RowProps = {
  alignContent?: ViewStyle['alignContent'];
  justifyContent?: ViewStyle['justifyContent'];
  children: string | JSX.Element | JSX.Element[];
  onPress?: () => void;
  styles?: ViewStyle;
};

const Row = ({
  alignContent,
  justifyContent,
  onPress,
  styles,
  children,
}: RowProps) => {
  const styles1 = StyleSheet.create({
    container: {
      justifyContent,
      alignContent,
      flexDirection: 'row',
    },
  });
  return !onPress ? (
    <View style={[styles1.container, styles ?? {}]}>{children}</View>
  ) : (
    <TouchableOpacity onPress={onPress} style={styles1.container}>
      {children}
    </TouchableOpacity>
  );
};

export default Row;
