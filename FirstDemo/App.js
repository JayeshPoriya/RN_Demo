/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/home/Home.js';
import PageOne from './src/components/page_one/PageOne.js';
import PageTwo from './src/components/page_two/PageTwo.js';
import PageThree from './src/components/page_three/PageThree.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation, route}) => ({
            headerShown: true,
            headerBackVisible: false,
          })}
        />
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen name="PageTwo" component={PageTwo} />
        <Stack.Screen name="PageThree" component={PageThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
