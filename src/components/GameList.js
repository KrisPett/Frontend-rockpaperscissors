import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native';
import { API } from '../routes/Api';
import AvailableGame from './AvailableGame';

const GameList = ({ navigation, data, activeToken }) => {
    const [DATA, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        setData(data);
    }, [])

    function refreshGames() {
        setRefresh(true)
        setIsDisabled(false);
        API.fetchGetAvailableGames(activeToken)
            .then(response => response.json())
            .then(json => setData(json))
            .finally(() => {
                setTimeout(() => {
                    setRefresh(false)
                }, 1000);
            })
    };

    joinSelectedGame = (item) => {
        API.fetchJoinGame(activeToken, item.id);
        setIsDisabled(true);
        navigation.navigate('ActiveGameScreen')
    }

    const renderItem = ({ item }) => (
        <AvailableGame
            title={item.name}
            onClick={() => joinSelectedGame(item)}
            isDisabled={isDisabled}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                refreshing={refresh}
                onRefresh={() => refreshGames()}
                onEndReachedThreshold={.1}
                onEndReached={() => refreshGames()}
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

export default GameList;