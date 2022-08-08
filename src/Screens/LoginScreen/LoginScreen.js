import { Pressable, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import BG from '../../../assets/bg.jpg';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.warn('Login');
    };
    return (
        <ImageBackground source={BG} style={styles.bg}>
            <View style={styles.page}>
                <TextInput
                    value={username}
                    onChangeText={setUsername}
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Pressable style={styles.button} onPress={login}>
                    <Text>Login</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    page: {
        marginTop: 320,
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    input: {
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
    },
    button: {
        marginTop: 40,
        backgroundColor: 'dodgerblue',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
    },
});
