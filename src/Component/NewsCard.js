import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const NewsCard = (props) => {
    return (
        <View>
            <Image source={{ uri: props.data.urlToImage }} style={styles.img} />
            <Text style={styles.title}>{props.data.title}</Text>
        </View>
    );
};

export default NewsCard;

const styles = StyleSheet.create({
    img: {
        width: "auto",
        height: 200,
        borderRadius: 20,
        marginVertical: 7,
    },
    title: {
        marginVertical: 10,
        fontSize: 15,
    },
});
