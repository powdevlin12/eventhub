import Spacing from '@common/constants/spacing';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  type FlexStyle,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

export interface ColumnProps {
  children: React.ReactNode;
  spacing?: number;
  align?: FlexStyle['alignItems'];
  justify?: FlexStyle['justifyContent'];
  className?: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}
const Column = ({
  children,
  spacing = 2,
  align,
  justify,
  className,
  style,
  onPress,
  ...rest
}: ColumnProps) => {
  const styles = StyleSheet.create({
    container: {
      rowGap: Spacing(spacing),
      alignItems: align,
      justifyContent: justify,
    },
  });
  const Container = onPress ? TouchableOpacity : View;
  return (
    <Container
      className={className}
      style={[styles.container, style]}
      activeOpacity={onPress ? 0.5 : 1}
      onPress={onPress}
      {...rest}>
      {children}
    </Container>
  );
};

export default Column;
