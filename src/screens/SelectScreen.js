import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from 'expo-font';

import SelectGameButton from '../components/SelectGameButton'
import Header from '../components/Header';
import Colors from '../constants/Colors';
import StyleContainer from '../constants/StyleContainer';
import NavBar from '../components/NavBar';
import ArrowButtons from '../components/ArrowButtons';
import { TokenStore } from '../utils/TokenStore';
import { API } from '../routes/Api';

function SelectScreen({ navigation }) {
    const [newToken, setNewToken] = useContext(TokenStore);
    const [imageTrigger, setImmageTrigger] = useState("true");
    const [loaded] = useFonts({
        Headline: require('../assets/fonts/MountainsofChristmas-Bold.ttf')
    });
    if (!loaded) return null;
    const imageJoinGame = require("../assets/images/JoinGameImage.jpg");
    const imageCreateGame = require("../assets/images/RockHand1.jpg");

    toggleImage = () => {
        if (imageTrigger) setImmageTrigger(false);
        else setImmageTrigger(true);
    }
    btnSelectGame = () => {
        if (imageTrigger) {
            navigation.navigate('ListsScreen')
        }
        else {
            API.fetchCreateGame(newToken);
            navigation.navigate('ActiveGameScreen');
        }
    }

    return (
        <View style={StyleContainer.container}>
            <View style={styles.container}>
                <Header />
                <View style={styles.buttonContainer}>
                    <View><Text style={styles.selectText}>{imageTrigger ? "JOIN GAME" : "CREATE GAME"}</Text></View>
                    <View style={styles.selectButtonContainer}>
                        <View style={styles.arrowButtonContainer}>
                            <ArrowButtons
                                icon={faArrowCircleLeft}
                                onClick={toggleImage} />
                        </View>
                        <SelectGameButton
                            url={imageTrigger ? imageJoinGame : imageCreateGame}
                            onClick={btnSelectGame}
                        />
                        <View style={styles.arrowButtonContainer}>
                            <ArrowButtons
                                icon={faArrowCircleRight}
                                onClick={toggleImage} />
                        </View>
                    </View>
                </View>
                <View style={styles.navBarContainer}>
                    <NavBar navigation={navigation} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,

    },
    selectText: {
        fontSize: 40,
        color: Colors.icons,
        fontFamily: "Headline",
    },
    navBarContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 20
    },
    selectButtonContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    arrowButtonContainer: {
        marginHorizontal: 5
    },
})

export default SelectScreen;