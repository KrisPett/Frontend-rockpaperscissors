import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

import Header from '../components/Header';
import StyleContainer from '../constants/StyleContainer';
import NavBar from '../components/NavBar';
import ConfirmButton from '../components/ConfirmButtons';
import { TokenStore } from '../utils/TokenStore';
import { API } from '../routes/Api';

function ResultScreen({ navigation }) {
    const [activeToken, setActiveToken] = useContext(TokenStore)
    const [activeGame, setActiveGame] = useState();
    const [resultTextColor, setResultTextColor] = useState("black")
    const [resultText, setResultText] = useState("Game in progress")
    const [disableButton, setDisableButton] = useState(true)

    useEffect(() => {
        setDisableButton(true),
            API.fetchGetActiveGame(activeToken)
                .then(response => response.json())
                .then(json => { setActiveGame(json) })
                .finally(() => {
                    setTimeout(() => {
                        setDisableButton(false)
                    }, 2000)
                });
    }, []);

    useEffect(() => {
        if (activeGame != null) {
            setResultText(activeGame.game)
        }
    }, [activeGame])

    const [loaded] = useFonts({
        Headline: require('../assets/fonts/MountainsofChristmas-Bold.ttf')
    });
    if (!loaded) return null;

    playButtonHandler = () => {
        navigation.navigate("SelectScreen")
    }

    return (
        <View style={StyleContainer.container}>
            <View style={styles.container}>
                <Header />
                <View style={styles.textContainer}>
                    <Text style={[styles.resultText, { color: resultTextColor }]}>
                        {resultText}
                    </Text>
                </View>
                <View style={styles.confirmButtonContainer}>
                    <ConfirmButton
                        title="PLAY AGAIN"
                        onClick={playButtonHandler}
                        isDisabled={disableButton}
                    />
                </View>
                <View style={styles.navBarContainer}>
                    <NavBar navigation={navigation} isDisabled={disableButton} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "center",
        marginTop: 50
    },
    resultText: {
        fontSize: 40,
        fontFamily: "Headline",
    },
    confirmButtonContainer: {
        marginTop: 100,
        width: 300,
        alignSelf: "center"
    },
    navBarContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 20
    },
})

export default ResultScreen;