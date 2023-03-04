import React from 'react';
import {Slider} from '@rneui/themed';
import RadioButtonCheckedIcon from '@src/assets/images/radio-button-checked.svg';

interface Props {
  value: number;
  onValueChange: (value: number) => void;
  maximumValue: number;
}

export function SimpleSlider({
  value,
  onValueChange,
  maximumValue,
}: Props): JSX.Element {
  return (
    <Slider
      value={value}
      onValueChange={onValueChange}
      maximumValue={maximumValue}
      minimumValue={0}
      step={1}
      allowTouchTrack
      trackStyle={{height: 5, backgroundColor: 'transparent'}}
      thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
      thumbProps={{
        children: <RadioButtonCheckedIcon width={20} height={20} />,
      }}
    />
  );
}
