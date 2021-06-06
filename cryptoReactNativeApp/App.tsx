import React, {useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
 //Provides a way for your app to transition between screens where each new screen is placed on top of a stack.
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack';

import * as AppView from './View';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const MainStackNaviggator = () =>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name='Home' component={AppView.HomeView}></Stack.Screen>
    <Stack.Screen name='RandomWord' component={AppView.RandomView}></Stack.Screen>
    <Stack.Screen name='SelectorList' component={AppView.SelectorListView}></Stack.Screen>
    <Stack.Screen name='RandomWordList' component={AppView.RandomWordThemeView}></Stack.Screen>

  </Stack.Navigator>


const MyTabNavigator = () => 
<Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Home' component={AppView.HomeView} />
        <Tab.Screen name='RandomWord' component={AppView.RandomView} />
        <Tab.Screen name='SelectorList' component={AppView.SelectorListView} />
      </Tab.Navigator>


function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name='Home' component={AppView.HomeView} />
        <Tab.Screen name='RandomWord' component={AppView.RandomView} />
        <Tab.Screen name='SelectorList' component={AppView.SelectorListView} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

 const App = () => {
   return (       
       <MyTabs />
   );
 };

 export default App;
