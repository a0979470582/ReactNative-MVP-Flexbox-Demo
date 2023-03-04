import {colors} from '@src/styles/colors';
import React from 'react';
import {ViewStyle} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

export interface BoxProps {
  name: string;
  colorRgb: string;
  style?: ViewStyle;
}
export function Box({name, colorRgb, style}: BoxProps): JSX.Element {
  return (
    <View style={[styles.boxContainer, {backgroundColor: colorRgb}, style]}>
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
