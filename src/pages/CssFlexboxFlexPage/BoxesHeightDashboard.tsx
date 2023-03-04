import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  heightBox1: number;
  heightBox2: number;
  heightContainer: number;
}

export function BoxesHeightDashboard({
  heightBox1,
  heightBox2,
  heightContainer,
}: Props): JSX.Element {
  return (
    <View style={{position: 'absolute', right: 0, margin: 8}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Box1 H: </Text>
        <Text>{heightBox1.toFixed()}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Box2 H: </Text>
        <Text>{heightBox2.toFixed()}</Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Container H: </Text>
        <Text>{heightContainer.toFixed()}</Text>
      </View>
    </View>
  );
}
