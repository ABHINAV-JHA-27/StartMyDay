import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground, ActivityIndicator, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import bg from "../../../assets/gradient.jpg";
import NewsCard from "../../Component/NewsCard";
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { service } from '../../Services/NewsService';

const HomeScreen = () => {
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);

    const navigation = useNavigation();

    const showDetail = (item) => {
        navigation.navigate('Detail', { item });
    }

    const getData = () => {
        service().then(data => {
            setData(data);
        }).catch(err => {
            console.warn(err);
        })
    }

    useEffect(() => {
        getData();
        setLoading(false);
    }, [Loading])


    const goBack = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text: "Return",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "Yes", onPress: () => navigation.pop() }
            ]
        );
    }

    return (
        <ImageBackground source={bg} style={styles.page}>
            <View >
                <View style={styles.header}>
                    <Pressable onPress={goBack}>
                        <Feather name="log-out" size={24} color="black" />
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
        backgroundColor: 'rgba(250, 250, 250, 0.2)',
        marginVertical: 10,
        padding: 10,
        borderRadius: 20,
    },
    footer: {
        marginTop: 10,
    },
});
