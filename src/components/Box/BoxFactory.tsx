import React from 'react';
import {Box, BoxProps} from '@src/components/Box/Box';
import {colors} from '@src/styles/colors';
import {LayoutChangeEvent, ViewStyle} from 'react-native';

export enum BoxType {
  Type1,
  Type2,
  Type3,
  Type4,
  Type5,
  Type6,
  Type7,
}

const BoxConfig = {
  [BoxType.Type1]: {name: '1', colorRgb: colors.pink_500},
  [BoxType.Type2]: {name: '2', colorRgb: colors.yellow_800},
  [BoxType.Type3]: {name: '3', colorRgb: colors.green_500},
  [BoxType.Type4]: {name: '4', colorRgb: colors.blue_500},
  [BoxType.Type5]: {name: '5', colorRgb: colors.lime_500},
  [BoxType.Type6]: {name: '6', colorRgb: colors.cyan_500},
  [BoxType.Type7]: {name: '7', colorRgb: colors.indigo_500},
};

interface BoxFactoryProps {
  boxType: BoxType;
  style?: ViewStyle;
  onLayout?: (event: LayoutChangeEvent) => void;
}
export function BoxFactory({
  boxType,
  style,
  onLayout,
}: BoxFactoryProps): JSX.Element {
  const boxProps: BoxProps = BoxConfig[boxType];

  return <Box {...boxProps} style={style} onLayout={onLayout} />;
}
