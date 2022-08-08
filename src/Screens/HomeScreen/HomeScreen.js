import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import bg from "../../../assets/gradient.jpg";
import NewsCard from "../../Component/NewsCard";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import data from './Data.json'

const HomeScreen = () => {
    const [Data, setData] = useState(data);
    const [Loading, setLoading] = useState(true);

    const navigation = useNavigation();

    const showDetail = (item) => {
        navigation.navigate('Detail', { item });
    }

    const getData = async () => {
        const apiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f11a8f8fdc674f44a6d3b975546f374c";
        fetch(apiUrl).then((res) => res.json()).then(res => {
            // setData(Data.concat(res));
            console.warn(Data);
            setLoading(false);
        })
    }

    useEffect(() => {
        getData();
        setLoading(false);
        // console.warn(Data);
    }, [Loading])

    return (
        <ImageBackground source={bg} style={styles.page}>
            <View >
                <View style={styles.header}>
                    <Pressable>
                        <Ionicons name="options-outline" size={24} color="black" />
                    </Pressable>
                    <Text>Hello User!!</Text>
                </View>
                <FlatList
                    data={Data}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => showDetail(item)} style={styles.card}>
                            <NewsCard data={item} />
                        </Pressable>
                    )}
                    ListFooterComponent={() => (
                        <View style={styles.footer}>
                            <ActivityIndicator size="large" color="white" />
                        </View>
                    )}
                    onEndReachedThreshold={1}
                    onEndReached={() => setLoading(true)}
                />
            </View>
        </ImageBackground>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        padding: 12,
    },
    header: {
        width: "100%",
        marginTop: 45,
        backgroundColor: 'dodgerblue',
        padding: 18,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    card: {
        backgroundColor: 'white',
        marginVertical: 10,
        padding: 10,
        borderRadius: 20,
    },
    footer: {
        marginTop: 10,
    },
});
