import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function SelectGameButton(props) {
    return (
        <View>
            <TouchableOpacity onPress={props.onClick}>
                <Image style={styles.image} source={props.url} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
})

export default SelectGameButton;