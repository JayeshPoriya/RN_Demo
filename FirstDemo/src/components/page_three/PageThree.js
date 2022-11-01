import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Styles from './Styles';

function PageThree({navigation}) {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <Text style={{color: 'blue', padding: 5}}>
          Hello <Text style={{color: 'red', padding: 5}}>Jayesh Poriya </Text>
          Third Page
        </Text>
      </View>
    </SafeAreaView>
  );
}
export default PageThree;
