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
        <Stack.Screen name={RouteName.MainPage} component={MainPage} />
        <Stack.Screen
          name={RouteName.CssFlexboxFlexDirectionPage}
          component={CssFlexboxFlexDirectionPage}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxJustifyContentPage}
          component={CssFlexboxJustifyContentPage}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxAlignItemsPage}
          component={CssFlexboxAlignItemsPage}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxAlignSelfPage}
          component={CssFlexboxAlignSelfPage}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxAlignContentPage}
          component={CssFlexboxAlignContentPage}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxFlexWrapPage}
          component={CssFlexboxFlexWrapPage}
        />
        <Stack.Screen
          name={RouteName.CssFlexboxFlexPage}
          component={CssFlexboxFlexPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
