import React from 'react';
import {View} from 'react-native';

type SpaceComponentProps = {
  width?: number;
  height?: number;
};

const SpaceComponent = ({height = 0, width = 0}: SpaceComponentProps) => {
  return <View style={{height, width}} />;
};

export default SpaceComponent;
