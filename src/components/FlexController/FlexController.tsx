import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '@src/styles/colors';
import {SimpleSlider} from '@src/components/FlexController/SimpleSlider';

interface FlexControllerProps {
  name: string;
  flexGrow: number;
  setFlexGrow: (value: number) => void;
  flexShrink: number;
  setFlexShrink: (value: number) => void;
  flexBasis: number;
  setFlexBasis: (value: number) => void;
}
export function FlexController({
  name,
  flexGrow,
  setFlexGrow,
  flexShrink,
  setFlexShrink,
  flexBasis,
  setFlexBasis,
}: FlexControllerProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{name}</Text>
      <View style={styles.sliderContainer}>
        <Text
          style={styles.sliderTitleText}>{`Flex Basis (${flexBasis})`}</Text>
        <SimpleSlider
          value={flexBasis}
          onValueChange={setFlexBasis}
          maximumValue={250}
        />
        <Text style={styles.sliderTitleText}>{`Flex Grow (${flexGrow})`}</Text>
        <SimpleSlider
          value={flexGrow}
          onValueChange={setFlexGrow}
          maximumValue={10}
        />
        <Text
          style={styles.sliderTitleText}>{`Flex Shrink (${flexShrink})`}</Text>
        <SimpleSlider
          value={flexShrink}
          onValueChange={setFlexShrink}
          maximumValue={10}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.purple_500,
  },
  sliderContainer: {
    marginVertical: 12,
  },
  sliderTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.purple_500,
  },
});
