import { Pressable, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import BG from '../../../assets/bg.jpg';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const login = () => {
        if (username.toLowerCase() === 'admin' && password === 'admin') {
            navigation.navigate('HomeScreen');
        } else {
            alert('Invalid username or password');
        }
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
                    placeholderTextColor={'black'}
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor={'black'}
                />
                <Pressable style={styles.button} onPress={login}>
                    <Text style={{ color: "black", fontWeight: '700', fontSize: 20 }}>Login</Text>
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
        backgroundColor: 'rgba(250, 250, 250, 0.5)',
        padding: 15,
        marginVertical: 10,
        borderRadius: 10,
    },
    button: {
        marginTop: 40,
        backgroundColor: 'rgba(100, 100, 200, 0.6)',
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
    },
});
