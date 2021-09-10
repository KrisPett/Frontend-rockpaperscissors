import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header';
import Colors from '../constants/Colors';
import StyleContainer from '../constants/StyleContainer';
import BackButton from '../components/BackButton';
import SignIcon from '../components/SignIcon';
import SignIconButton from '../components/SignIconButton';
import { API } from '../routes/Api';
import { TokenStore } from '../utils/TokenStore';
import AlertConfirm from '../components/AlertConfirm';

function ListScreen({ navigation }) {
    const [activeToken, setActiveToken] = useContext(TokenStore)
    const [activeGame, setActiveGame] = useState();
    const [chosenSign, setChosenSign] = useState(null);
    const [showIndicator, setShowIndicator] = useState(false)
    const [isApiLoading, setIsApiLoading] = useState(true)
    const [alertDisable, setAlertDisable] = useState(false)
    const [glowingEffect, setGlowingEffect] = useState(false)

    useEffect(() => {
        if (isApiLoading) {
            setTimeout(() => {
                API.fetchGetActiveGame(activeToken)
                    .then(response => response.json())
                    .then(json => setActiveGame(json))
            }, 1000);
        }
    })

    useEffect(() => {
        if (activeGame === undefined) {
            return;
        }
        if (chosenSign !== null && (activeGame.game === "OPEN" || activeGame.game === "ACTIVE")) {
            setShowIndicator(true);
        }
        else if (chosenSign !== null) {
            setIsApiLoading(false);
            navigation.navigate("ResultScreen")
        }
    })

    function signHandler(sign) {
        API.fetchMakeMove(activeToken, sign)
        setChosenSign(sign);
        setAlertDisable(true);
        setIsApiLoading(true)
        setGlowingEffect(true)
        cancelChoosenSign(sign);
    }

    function cancelChoosenSign(sign) {
        if (sign === chosenSign) {
            setAlertDisable(false);
            setChosenSign(null);
            setIsApiLoading(false);
            setShowIndicator(false);
            setGlowingEffect(false);
            API.fetchMakeMove(activeToken, "NONE");
        }
    }

    showActivityIndicator = () => {
        return (
            <View style={styles.activityIndicator}>
                <ActivityIndicator size="large" color={Colors.paper} />
                <Text>Wating For Opponent</Text>
            </View>
        )
    }

    function onTriggerAlertHandler() {
        setIsApiLoading(false);
        AlertConfirm(onYesPressHandler, onNoPressHandler)
        setAlertDisable(true);
    }

    function onYesPressHandler() {
        navigation.navigate("HomeScreen")
        setIsApiLoading(false)
        API.fetchDeleteGame(activeToken);
    }

    function onNoPressHandler() {
        setIsApiLoading(true);
        setAlertDisable(false)
    }

    return (
        <View style={StyleContainer.container}>
            <Header />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Choose Rock, Paper or Scissors</Text>
                <Text style={styles.title}>To PLay</Text>
            </View>
            <View style={styles.signIconButtonContainer}>
                <View style={styles.signIconButton}>
                    <TouchableOpacity
                        style={styles.signIconContainer}
                        onPress={() => signHandler("ROCK")}>
                        <SignIcon icon={faHandRock} color={Colors.rock} />
                    </TouchableOpacity>
                    <SignIconButton
                        title="ROCK" titleColor={Colors.rock}
                        onClick={() => signHandler("ROCK")}
                        borderColor={Colors.rock}
                        glowingEffect={chosenSign == "ROCK" ? glowingEffect : ""}
                    />
                </View>
                <View style={styles.signIconButton}>
                    <TouchableOpacity
                        style={styles.signIconContainer}
                        onPress={() => signHandler("PAPER")}>
                        <SignIcon icon={faHandPaper} color={Colors.paper} />
                    </TouchableOpacity>
                    <SignIconButton
                        title="PAPER"
                        titleColor={Colors.paper}
                        onClick={() => signHandler("PAPER")}
                        borderColor={Colors.paper}
                        glowingEffect={chosenSign == "PAPER" ? glowingEffect : ""}
                    />
                </View>
                <View style={styles.signIconButton}>
                    <TouchableOpacity
                        style={styles.signIconContainer}
                        onPress={() => signHandler("SCISSORS")}>
                        <SignIcon icon={faHandScissors} color={Colors.scissors} />
                    </TouchableOpacity>
                    <SignIconButton
                        title="SCISSORS"
                        titleColor={Colors.scissors}
                        onClick={() => signHandler("SCISSORS")}
                        borderColor={Colors.scissors}
                        glowingEffect={chosenSign == "SCISSORS" ? glowingEffect : ""}
                    />
                </View>
            </View>
            {showIndicator ? showActivityIndicator() : <View />}
            <View style={styles.backBtnContainer}>
                <BackButton
                    onYes={() => onYesPressHandler()}
                    onNo={() => onNoPressHandler()}
                    onTriggerAlert={() => onTriggerAlertHandler()}
                    disableAlert={alertDisable}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        marginTop: 30
    },
    title: {
        fontSize: 20
    },
    backBtnContainer: {
        alignSelf: "flex-start",
        marginLeft: 30,
        marginBottom: 50
    },
    signIconContainer: {
        marginBottom: 10
    },
    signIconButtonContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "flex-end",
        marginBottom: 100
    },
    signIconButton: {
        alignItems: "center",
        paddingHorizontal: 10,
    },
    activityIndicator: {
        position: "absolute",
        top: 600
    }
})

export default ListScreen;