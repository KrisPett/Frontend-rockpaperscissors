import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors'

const AvailableGame = ({ title, onClick, isDisabled }) => (
    <TouchableOpacity style={styles.item} onPress={onClick} disabled={isDisabled}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.icons,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
        borderWidth: 2
    },
    title: {
        fontSize: 30,
    },
})

export default AvailableGame;