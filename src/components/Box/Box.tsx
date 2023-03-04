import {colors} from '@src/styles/colors';
import React from 'react';
import {LayoutChangeEvent, ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

export interface BoxProps {
  name: string;
  colorRgb: string;
  style?: ViewStyle;
  onLayout?: (event: LayoutChangeEvent) => void;
}
export function Box({name, colorRgb, style, onLayout}: BoxProps): JSX.Element {
  return (
    <View
      style={[styles.boxContainer, {backgroundColor: colorRgb}, style]}
      onLayout={onLayout}>
      <Text style={styles.boxText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    margin: 4,
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: colors.grey_50,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
