import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
 
export const Home = ({navigation}) => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Wellcome {user.username} to APP! </Text>
      <Button
        title="Detail"
        onPress={() => navigation.navigate('Detail', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "green",
  },
});