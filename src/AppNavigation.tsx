import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainPage} from '@src/pages/MainPage';
import {CssFlexboxFlexDirectionPage} from '@src/pages/CssFlexboxFlexDirectionPage';
import {CssFlexboxAlignContentPage} from '@src/pages/CssFlexboxAlignContentPage';
import {CssFlexboxAlignItemsPage} from '@src/pages/CssFlexboxAlignItemsPage';
import {CssFlexboxAlignSelfPage} from '@src/pages/CssFlexboxAlignSelfPage';
import {CssFlexboxFlexPage} from '@src/pages/CssFlexboxFlexPage';
import {CssFlexboxFlexWrapPage} from '@src/pages/CssFlexboxFlexWrapPage';
import {CssFlexboxJustifyContentPage} from '@src/pages/CssFlexboxJustifyContentPage';
import {RouteName} from '@src/constant';

const Stack = createNativeStackNavigator();

export function AppNavigation(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteName.MainPage}>
        <Stack.Screen
          name={RouteName.MainPage}
          component={MainPage}
          options={{title: 'Main'}}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxFlexDirectionPage}
          component={CssFlexboxFlexDirectionPage}
          options={{title: 'Flex Direction'}}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxJustifyContentPage}
          component={CssFlexboxJustifyContentPage}
          options={{title: 'Justify Content'}}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxAlignItemsPage}
          component={CssFlexboxAlignItemsPage}
          options={{title: 'Align Items'}}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxAlignSelfPage}
          component={CssFlexboxAlignSelfPage}
          options={{title: 'Align Self'}}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxAlignContentPage}
          component={CssFlexboxAlignContentPage}
          options={{title: 'Align Content'}}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxFlexWrapPage}
          component={CssFlexboxFlexWrapPage}
          options={{title: 'Flex Wrap'}}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxFlexPage}
          component={CssFlexboxFlexPage}
          options={{title: 'Flex'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
