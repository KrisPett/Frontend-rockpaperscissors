import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Colors from '../constants/Colors';

function Header() {
    const [loaded] = useFonts({
        Headline: require('../assets/fonts/MountainsofChristmas-Bold.ttf')
    });
    if (!loaded) return null;

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
                <Text style={[styles.font, styles.rock]}>Rock </Text>
                <Text style={[styles.font, styles.paper]}>Paper</Text>
            </View>
            <View>
                <Text style={[styles.font, styles.scissors]}>Scissors!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: "center",

    },
    font: {
        fontFamily: "Headline",
        fontSize: 70,

    },
    rock: {
        color: Colors.rock

    },
    paper: {
        color: Colors.paper

    },
    scissors: {
        color: Colors.scissors

    },
})

export default Header;