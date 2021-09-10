import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import Header from '../components/Header';
import Colors from '../constants/Colors';
import StyleContainer from '../constants/StyleContainer';
import NavBar from '../components/NavBar';
import GameList from '../components/GameList';
import { TokenStore } from '../utils/TokenStore';
import { API } from '../routes/Api';

function ListScreen({ navigation }) {
    const [activeToken, setActiveToken] = useContext(TokenStore);
    const [availableGames, setAvailableGames] = useState();
    const [isApiLoading, setIsApiLoading] = useState(true);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (navigation.isFocused()) {
            API.fetchGetAvailableGames(activeToken)
                .then(response => response.json())
                .then(json => { setIsApiLoading(true), setAvailableGames(json) })
                .finally(() => setIsApiLoading(false))
        }
    }, [isFocused])

    return (
        <View style={StyleContainer.container}>
            <View style={styles.container}>
                <Header />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>SELECT A GAME TO JOIN</Text>
                </View>
                {!isApiLoading ? <View style={styles.gameListContainer}>
                    <GameList
                        navigation={navigation}
                        data={availableGames}
                        activeToken={activeToken}
                    />
                </View> : <View></View>}
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
        maxHeight: 300,

    },
})

export default ListScreen;