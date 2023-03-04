import {BoxFactory, BoxType} from '@src/components/Box/BoxFactory';
import React, {useState} from 'react';
import {StyleSheet, View, FlexStyle} from 'react-native';
import {colors} from '@src/styles/colors';
import {RadioButtons} from '@src/components/RadioButton/RadioButtons';

const Datas = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];

export function CssFlexboxJustifyContentPage(): JSX.Element {
  const [index, setIndex] = useState(0);
  const data = Datas[index] as FlexStyle['justifyContent'];

  return (
    <View style={styles.container}>
      <View style={[styles.boxesContainer, {justifyContent: data}]}>
        <BoxFactory boxType={BoxType.Type1} />
        <BoxFactory boxType={BoxType.Type2} />
        <BoxFactory boxType={BoxType.Type3} />
        <BoxFactory boxType={BoxType.Type4} />
        <BoxFactory boxType={BoxType.Type5} />
        <BoxFactory boxType={BoxType.Type6} />
        <BoxFactory boxType={BoxType.Type7} />
      </View>
      <RadioButtons titles={Datas} index={index} setIndex={setIndex} />
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
    flexWrap: 'wrap',
    maxHeight: '50%',
    borderRadius: 12,
    borderWidth: 8,
    borderColor: colors.pink_100,
  },
});
