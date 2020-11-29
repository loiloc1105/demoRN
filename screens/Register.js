import React, { useContext,useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity , Button , Image } from "react-native";
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';

export const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Image style={styles.text} source={require('../assets/edituser.png')} />
      <FormInput
        value={email}
        placeholderText='Email'
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize='none'
        keyboardType='email-address'
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText='Password'
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <Button
        title={"Sign Up"}
        onPress={() => register(email, password)}
      />
      
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.navButtonText}>Go Back</Text>
      </TouchableOpacity>
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
    width : 100,
    height: 100
  },
  navButton: {
    marginTop: 15
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee'
  }
});