import React, { useState, createContext } from 'react';
import firebaseConfig from '../firebase/firebase';
import { ToastAndroid } from 'react-native';

export const AuthContext = createContext({
	user: null,
	login: () => {},
	logout: () => {},
	register: () => {}
});

export const AuthProvider = ({ children }) => {
	const [ user, setUser ] = useState(null);
	return (
		<AuthContext.Provider
			value={{
				user,
				login: async (email, password) => {
					await firebaseConfig
						.auth()
						.signInWithEmailAndPassword(email, password)
						.then((user) => {
							// If you need to do anything with the user, do it here
							setUser({ username: email });
							console.log('Login success!');
							ToastAndroid.show('Login success!', ToastAndroid.SHORT);
						})
						.catch((error) => {
							const { code, message } = error;
							console.log('Error: ' + message);
							ToastAndroid.show('Login fail!', ToastAndroid.SHORT);
						});
				},
				register: async (email, password) => {
					await firebaseConfig
						.auth()
						.createUserWithEmailAndPassword(email, password)
						.then((user) => {
							console.log('Register success!');
							ToastAndroid.show('Register success!', ToastAndroid.SHORT);
						})
						.catch((error) => {
							const { code, message } = error;
							console.log('Error: ' + message);
							ToastAndroid.show('Register fail!', ToastAndroid.SHORT);
						});
				},
				logout: async () => {
					setUser(null);
					ToastAndroid.show('Logout!', ToastAndroid.SHORT);
				}
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
