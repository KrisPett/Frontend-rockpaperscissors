import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import Colors from '../constants/Colors';

function PlayButton(props) {
    return (
        <View>
            <Button
                buttonStyle={styles.button}
                icon={{
                    name: "arrow-right",
                    size: 70,
                    color: "white",
                }}
                onPress={props.onClick}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 110,
        height: 80,
        borderRadius: 20,
        backgroundColor: Colors.icons,
    },
})

export default PlayButton;