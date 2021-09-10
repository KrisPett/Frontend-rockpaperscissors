import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import UserGame from './UserGame';

const HistoryGameList = ({ data }) => {
    const [DATA, setData] = useState([]);

    useEffect(() => {
        setData(data);
    })

    const renderItem = ({ item }) => (
        <UserGame
            playerName={item.playerName}
            opponentName={item.opponentName}
            gameStatus={item.game}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        borderWidth: .3,
        borderRadius: 10
    },
});

export default HistoryGameList;