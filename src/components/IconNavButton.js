import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Button } from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useFonts } from 'expo-font';

import Colors from '../constants/Colors'
function IconNavButton(props) {
    const [loaded] = useFonts({
        Headline: require('../assets/fonts/MountainsofChristmas-Bold.ttf')
    });
    if (!loaded) return null;

    return (
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Button buttonStyle={styles.button}
                    icon={
                        <FontAwesomeIcon
                            icon={props.icon}
                            color="white"
                            size={30}
                        />
                    }
                    onPress={props.onClick}
                />
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    button: {
        backgroundColor: Colors.icons,
        borderRadius: 100,
        width: 50,
        height: 50,
    },
    text: {
        color: Colors.icons,
        marginTop: 5,
        fontFamily: "Headline",
        fontSize: 20
    },
})

export default IconNavButton;