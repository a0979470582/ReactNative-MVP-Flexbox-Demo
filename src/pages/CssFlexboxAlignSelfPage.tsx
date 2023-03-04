import {BoxFactory, BoxType} from '@src/components/Box/BoxFactory';
import React, {useState} from 'react';
import {StyleSheet, View, FlexStyle} from 'react-native';
import {colors} from '@src/styles/colors';
import {RadioButtons} from '@src/components/RadioButton/RadioButtons';

const Datas = ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'];

export function CssFlexboxAlignSelfPage(): JSX.Element {
  const [index, setIndex] = useState(0);
  const data = Datas[index] as FlexStyle['alignSelf'];

  return (
    <View style={styles.container}>
      <View style={styles.boxesContainer}>
        <BoxFactory boxType={BoxType.Type1} />
        <BoxFactory boxType={BoxType.Type2} style={{alignSelf: data}} />
        <BoxFactory boxType={BoxType.Type3} />
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
    maxHeight: '50%',
    borderRadius: 12,
    borderWidth: 8,
    borderColor: colors.pink_100,
  },
});
