import {BoxFactory, BoxType} from '@src/components/Box/BoxFactory';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '@src/styles/colors';
import {FlexController} from '@src/components/FlexController/FlexController';

export function CssFlexboxFlexPage(): JSX.Element {
  const box1State = useBoxState();
  const box2State = useBoxState();

  const box1Style = {
    flexGrow: box1State.flexGrow,
    flexShrink: box1State.flexShrink,
    flexBasis: box1State.flexBasis,
  };

  const box2Style = {
    flexGrow: box2State.flexGrow,
    flexShrink: box2State.flexShrink,
    flexBasis: box2State.flexBasis,
  };

  return (
    <View style={styles.container}>
      <View style={[styles.boxesContainer]}>
        <BoxFactory boxType={BoxType.Type1} style={box1Style} />
        <BoxFactory boxType={BoxType.Type2} style={box2Style} />
      </View>
      <View style={styles.flexControllerContainer}>
        <FlexController {...box1State} name="Box1" />
        <FlexController {...box2State} name="Box2" />
      </View>
    </View>
  );
}

interface BoxState {
  flexGrow: number;
  setFlexGrow: (value: number) => void;
  flexShrink: number;
  setFlexShrink: (value: number) => void;
  flexBasis: number;
  setFlexBasis: (value: number) => void;
}

function useBoxState(): BoxState {
  const [flexGrow, setFlexGrow] = useState(1);
  const [flexShrink, setFlexShrink] = useState(0);
  const [flexBasis, setFlexBasis] = useState(50);

  return {
    flexGrow,
    setFlexGrow,
    flexShrink,
    setFlexShrink,
    flexBasis,
    setFlexBasis,
  };
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
    flexWrap: 'wrap',
    borderRadius: 12,
    borderWidth: 8,
    borderColor: colors.pink_100,
  },
  flexControllerContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
});
