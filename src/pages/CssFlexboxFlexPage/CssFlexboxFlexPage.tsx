import {BoxFactory, BoxType} from '@src/components/Box/BoxFactory';
import React, {useState} from 'react';
import {LayoutChangeEvent, StyleSheet, View} from 'react-native';
import {colors} from '@src/styles/colors';
import {FlexController} from '@src/components/FlexController/FlexController';
import {useBoxState} from '@src/pages/CssFlexboxFlexPage/useBoxState';
import {BoxesHeightDashboard} from '@src/pages/CssFlexboxFlexPage/BoxesHeightDashboard';

export function CssFlexboxFlexPage(): JSX.Element {
  const [boxContainerHeight, setBoxContainerHeight] = useState(0);
  const onLayoutBoxContainer = (event: LayoutChangeEvent) => {
    setBoxContainerHeight(event.nativeEvent.layout.height);
  };
  const [box1Height, setBox1Height] = useState(0);
  const onLayoutBox1 = (event: LayoutChangeEvent) => {
    setBox1Height(event.nativeEvent.layout.height);
  };

  const [box2Height, setBox2Height] = useState(0);
  const onLayoutBox2 = (event: LayoutChangeEvent) => {
    setBox2Height(event.nativeEvent.layout.height);
  };

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
      <View style={[styles.boxesContainer]} onLayout={onLayoutBoxContainer}>
        <BoxFactory
          boxType={BoxType.Type1}
          style={box1Style}
          onLayout={onLayoutBox1}
        />
        <BoxFactory
          boxType={BoxType.Type2}
          style={box2Style}
          onLayout={onLayoutBox2}
        />
        <BoxesHeightDashboard
          heightBox1={box1Height}
          heightBox2={box2Height}
          heightContainer={boxContainerHeight}
        />
      </View>
      <View style={styles.flexControllerContainer}>
        <FlexController {...box1State} name="Box1" />
        <FlexController {...box2State} name="Box2" />
      </View>
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
