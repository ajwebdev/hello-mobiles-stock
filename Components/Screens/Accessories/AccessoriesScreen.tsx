import  React from 'react';
import { Button, View, Text} from 'react-native';


export default function AccessoriesScreen({ navigation }) {
    console.log(navigation);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Accessories Screen</Text>
      </View>
    );
  }