import React from 'react';
import { View, Text, Button } from 'react-native';

export function Detail({ navigation, route }) {
  
  const { itemId } = route.params;
  const { otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Detail')}
      />
      <Button
        title="Go to Details... again with push"
        onPress={() => navigation.push('Detail',{
          itemId: Math.floor(Math.random() * 100),
        })}
      />
    </View>
  );
}