import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Styles from './Styles';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
function Home({navigation}) {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={Styles.renderMainContainers}
        onPress={() => {
          if (index == 0) {
            navigation.navigate('PageOne');
          } else if (index == 1) {
            navigation.navigate('PageTwo');
          } else {
            navigation.navigate('PageThree');
          }
        }}>
        <Text style={Styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.container}>
        <FlatList
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
export default Home;
