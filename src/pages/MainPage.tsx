import {colors} from '@src/styles/colors';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native';

const ITEM_TEXTS: Array<string> = [
  'flex-direction',
  'justify-content',
  'align-items',
  'align-self',
  'align-content',
  'flex-wrap',
  'flex',
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
  return (
    <View style={styles.listContainer}>
      {ITEM_TEXTS.map(itemText => (
        <Item key={itemText} itemText={itemText} />
      ))}
    </View>
  );
}

function Item({itemText}: {itemText: string}): JSX.Element {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>{itemText}</Text>
    </View>
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
