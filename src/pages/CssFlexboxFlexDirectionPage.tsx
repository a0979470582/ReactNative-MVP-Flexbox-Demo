import {BoxFactory, BoxType} from '@src/components/Box/BoxFactory';
import React from 'react';
import {StyleSheet, View} from 'react-native';

export function CssFlexboxFlexDirectionPage(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <BoxFactory boxType={BoxType.Type1} />
        <BoxFactory boxType={BoxType.Type2} />
        <BoxFactory boxType={BoxType.Type3} />
        <BoxFactory boxType={BoxType.Type4} />
        <BoxFactory boxType={BoxType.Type5} />
        <BoxFactory boxType={BoxType.Type6} />
        <BoxFactory boxType={BoxType.Type7} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  boxContainer: {
    margin: 16,
    flex: 1,
    flexDirection: 'row',
  },
});
