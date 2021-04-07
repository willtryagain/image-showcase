import React from "react";
import { View, Button } from "react-native";
import styles from "./styles";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Home Cpmte</Text>
        </View>
    );
}

Home.navigationOptions = {
    title: "Home"
};