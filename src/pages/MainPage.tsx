import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RouteName, AppPageParamsList} from '@src/constant';
import {colors} from '@src/styles/colors';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native';

const ITEMS = [
  {routeName: RouteName.CssFlexboxFlexDirectionPage, name: 'flex-direction'},
  {routeName: RouteName.CssFlexboxJustifyContentPage, name: 'justify-content'},
  {routeName: RouteName.CssFlexboxAlignItemsPage, name: 'align-items'},
  {routeName: RouteName.CssFlexboxAlignSelfPage, name: 'align-self'},
  {routeName: RouteName.CssFlexboxAlignContentPage, name: 'align-content'},
  {routeName: RouteName.CssFlexboxFlexWrapPage, name: 'flex-wrap'},
  {routeName: RouteName.CssFlexboxFlexPage, name: 'flex'},
];

export function MainPage(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>CSS-Flexbox</Text>
      <ItemList />
    </View>
  );
}

function ItemList(): JSX.Element {
  const navigation = useNavigation<NavigationProp<AppPageParamsList>>();
  return (
    <View style={styles.listContainer}>
      {ITEMS.map(({routeName, name}) => (
        <Item
          key={routeName}
          itemText={name}
          onPress={() => {
            navigation.navigate(routeName);
          }}
        />
      ))}
    </View>
  );
}

interface ItemProps {
  itemText: string;
  onPress: () => void;
}
function Item({itemText, onPress}: ItemProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Text style={styles.itemText}>{itemText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 16,
  },
  listItem: {
    minWidth: 70,
    minHeight: 50,
    backgroundColor: colors.red_100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 8,
    borderRadius: 12,
  },
  itemText: {
    color: colors.indigo_700,
    fontSize: 15,
    fontWeight: '600',
  },
});
