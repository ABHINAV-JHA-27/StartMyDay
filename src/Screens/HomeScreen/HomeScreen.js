import { StyleSheet, Text, View, FlatList, Pressable, ImageBackground, ActivityIndicator, Alert } from "react-native";
import React, { useState, useEffect } from "react";
import bg from "../../../assets/gradient.jpg";
import NewsCard from "../../Component/NewsCard";
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { service } from '../../Services/NewsService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNetInfo } from "@react-native-community/netinfo";
import NetInfo from '@react-native-community/netinfo';

const HomeScreen = () => {
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(false);
    const [page, setpage] = useState(1);
    const [internetConnected, setinternetConnected] = useState(true);

    const navigation = useNavigation();
    const route = useRoute();
    const user = route?.params?.user;

    const netinfo = useNetInfo();

    const showDetail = (item) => {
        navigation.navigate('Detail', { item });
    }

    const getDataFromAPI = async () => {
        await service().then(data => {
            setData(Data.concat(data));
        }).catch(err => {
            alert("A error has occurred.");
        });
    }

    const getDataFromCache = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@cache');
            setData(jsonValue ? JSON.parse(jsonValue) : null);
        } catch (e) {
            alert("A error has occurred.");
        }
    }

    const SetCacheData = async (Data) => {
        try {
            const jsonValue = JSON.stringify(Data)
            await AsyncStorage.setItem('@cache', jsonValue)
        } catch (e) {
            alert("A error has occurred.");
        }
    }

    NetInfo.fetch().then(state => {
        setinternetConnected(state.isConnected);
    });

    useEffect(() => {
        if (internetConnected) {
            setLoading(true);
            getDataFromAPI();
            SetCacheData(Data);
        } else {
            getDataFromCache();
        }
    }, [page])


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
                    <Text>Welcome Back {user}</Text>
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
                    onEndReachedThreshold={0}
                    onEndReached={() => {
                        setLoading(true)
                        setpage(page + 1)
                    }}
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
        backgroundColor: 'rgba(97, 34, 245,0.4)',
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
