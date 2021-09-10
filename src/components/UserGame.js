import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import Colors from '../constants/Colors'

function UserGame({ playerName, opponentName, gameStatus }) {
    const [textColor, setTextColor] = useState("yellow");

    useEffect(() => {
        changeColor();
    })

    function changeColor() {
        switch (gameStatus) {
            case 'WIN': return setTextColor(Colors.rock);
            case 'LOSE': return setTextColor(Colors.scissors);
            case 'DRAW': return setTextColor(Colors.paper);
        }
    }

    return (
        <View style={styles.item} >
            <Text style={styles.title}>You vs {opponentName}</Text>
            <Text style={styles.title}>GameResult: <Text style={{ color: textColor }}>{gameStatus}</Text></Text>
        </View >
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.icons,
        padding: 13,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 20,
        borderWidth: 2,
        alignItems: "stretch",
    },
    title: {
        fontSize: 20,
    },
    rock: {
        color: Colors.rock
    }
})

export default UserGame;