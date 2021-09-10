import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Colors from '../constants/Colors';
import StyleContainer from '../constants/StyleContainer';
import NavBar from '../components/NavBar';
import { TokenStore } from '../utils/TokenStore';
import { API } from '../routes/Api';
import HistoryGameList from '../components/HistoryGameList';

function HistoryScreen({ navigation }) {
    const [activeToken, setActiveToken] = useContext(TokenStore);
    const [games, setGames] = useState([]);

    useEffect(() => {
        getUserGames();
    }, [])

    function getUserGames() {
        API.fetchUserGames(activeToken)
            .then(response => response.json())
            .then(json => setGames(json.games))
    }

    return (
        <View style={StyleContainer.container}>
            <View style={styles.container}>
                <Header />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>HISTORY</Text>
                </View>
                <View style={styles.gameListContainer}>
                    <HistoryGameList
                        data={games}
                    />
                </View>
                <View style={styles.navBarContainer}>
                    <NavBar navigation={navigation} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        backgroundColor: Colors.icons,
    },
    title: {
        fontSize: 20
    },
    navBarContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 20
    },
    gameListContainer: {
        maxHeight: 300
    },
})

export default HistoryScreen;