import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation, useRoute } from '@react-navigation/core';
import bg from "../../../assets/gradient.jpg";
import * as WebBrowser from 'expo-web-browser';
import { Entypo } from '@expo/vector-icons';

const DetailPage = () => {
    //Initialization
    const navigation = useNavigation();
    const route = useRoute();
    const item = route?.params?.item;

    //Function to navigate to previous screen
    const goBack = () => {
        navigation.pop();
    }

    return (
        <ImageBackground source={bg} style={styles.page}>
            <Pressable style={styles.icon} onPress={() => goBack()}>
                <Entypo
                    name="circle-with-cross"
                    size={40}
                    color="rgba(147, 122, 204,0.4)"
                />
            </Pressable>
            <ScrollView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{item?.title}</Text>
                </View>
                <View style={styles.pictureContainer}>
                    <Image style={styles.picture} source={{ uri: item?.urlToImage }} />
                </View>
                <View style={styles.content}>
                    <Text style={styles.description}>{item?.description}</Text>
                    <Text style={styles.description}>{item?.content}</Text>
                    <Text style={{ fontSize: 20 }}>{"\n"}Full Article on</Text>
                    <Pressable
                        onPress={() => WebBrowser.openBrowserAsync(item?.url)}>
                        <Text style={styles.link}>{item?.url}{"\n"}</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

export default DetailPage;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 12,
    },
    titleContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
    },
    pictureContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
    },
    content: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 15,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
    },
    container: {
        marginTop: 85,
    },
    picture: {
        width: '100%',
        height: 200,
        borderRadius: 15,
    },
    description: {
        fontSize: 17,
        padding: 10,
    },
    link: {
        fontSize: 17,
        color: 'dodgerblue',
    },
    icon: {
        marginTop: 50,
        padding: 10,
        zIndex: 50,
        position: 'absolute',
    }
});
