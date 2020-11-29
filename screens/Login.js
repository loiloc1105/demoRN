import React, { useContext,useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity , Button , Image} from "react-native";
import { AuthContext } from "../navigation/AuthProvider";
import FormInput from '../components/FormInput';
 
export const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image style={styles.text} source={{uri : 'https://img.icons8.com/officel/2x/user.png'}} />
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
      
      <View style={styles.btnAction}>
        <Button title={"Login"} onPress={() => login(email, password)} />
        <Button color={"red"} title={"Register"} onPress={() => navigation.navigate('Register')}/>
      </View>
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
    height : 100,
    marginBottom: 10
  },
  navButton: {
    marginTop: 15
  },
  navButtonText: {
    fontSize: 20,
    color: '#6646ee'
  },
  btnAction:{
    flexDirection:'row',
    justifyContent: 'space-between'
  }
});