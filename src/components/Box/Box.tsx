import {colors} from '@src/styles/colors';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export interface BoxProps {
  name: string;
  colorRgb: string;
}
export function Box({name, colorRgb}: BoxProps): JSX.Element {
  return (
    <View style={[styles.boxContainer, {backgroundColor: colorRgb}]}>
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
