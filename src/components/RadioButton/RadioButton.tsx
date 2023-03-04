import {CheckBox} from '@rneui/base';
import React from 'react';
import RadioButtonCheckedIcon from '@src/assets/images/radio-button-checked.svg';
import RadioButtonUncheckedIcon from '@src/assets/images/radio-button-unchecked.svg';

// https://reactnativeelements.com/docs/components/checkbox

interface Props {
  checked: boolean;
  onPress: () => void;
  title: string;
}

export function RadioButton({checked, onPress, title}: Props): JSX.Element {
  return (
    <CheckBox
      checked={checked}
      onPress={onPress}
      checkedIcon={<RadioButtonCheckedIcon width={20} height={20} />}
      uncheckedIcon={<RadioButtonUncheckedIcon width={20} height={20} />}
      title={title}
    />
  );
}
