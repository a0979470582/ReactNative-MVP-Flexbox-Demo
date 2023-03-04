import {RadioButton} from '@src/components/RadioButton/RadioButton';
import React from 'react';
import {View} from 'react-native';

interface Props {
  index: number;
  setIndex: (index: number) => void;
  titles: Array<string>;
}
export function RadioButtons({index, setIndex, titles}: Props): JSX.Element {
  return (
    <View>
      {titles.map((title, i) => (
        <RadioButton
          key={title}
          checked={i === index}
          onPress={() => setIndex(i)}
          title={title}
        />
      ))}
    </View>
  );
}
