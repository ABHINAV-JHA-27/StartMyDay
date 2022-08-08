import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import DetailPage from "../Screens/DetailPage/DetailPage";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={LoginScreen}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
