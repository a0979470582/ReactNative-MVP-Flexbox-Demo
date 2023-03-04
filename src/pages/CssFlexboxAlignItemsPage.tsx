import {BoxFactory, BoxType} from '@src/components/Box/BoxFactory';
import React, {useState} from 'react';
import {StyleSheet, View, FlexStyle} from 'react-native';
import {colors} from '@src/styles/colors';
import {RadioButtons} from '@src/components/RadioButton/RadioButtons';

const AlignItems = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];

export function CssFlexboxAlignItemsPage(): JSX.Element {
  const [index, setIndex] = useState(0);
  const alignItem = AlignItems[index] as FlexStyle['alignItems'];

  return (
    <View style={styles.container}>
      <View style={[styles.boxesContainer, {alignItems: alignItem}]}>
        <BoxFactory boxType={BoxType.Type1} />
        <BoxFactory boxType={BoxType.Type2} />
        <BoxFactory boxType={BoxType.Type3} />
      </View>
      <RadioButtons titles={AlignItems} index={index} setIndex={setIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
  },
  boxesContainer: {
    margin: 16,
    flex: 1,
    maxHeight: '50%',
    borderRadius: 12,
    borderWidth: 8,
    borderColor: colors.pink_100,
  },
});
