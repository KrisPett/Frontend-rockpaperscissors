import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from "react-native-elements";
import Colors from '../constants/Colors'

function Buttons(props) {
    return (
        <TouchableOpacity>
            <Button
                buttonStyle={styles.button}
                titleStyle={styles.title}
                title={props.title}
                onPress={props.onClick}
                disabled={props.isDisabled}
                loading={props.isLoading}
                loadingProps={{ color: Colors.paper }}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    button: {
        height: 80,
        backgroundColor: Colors.icons,

    },
    title: {
        color: "green",
        fontSize: 20,
    }
});

export default Buttons;