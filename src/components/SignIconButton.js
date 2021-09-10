import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Colors from '../constants/Colors'

function SignIconButton(props) {
    return (
        <View style={props.glowingEffect ? styles.container : ""}>
            <Button
                title={props.title}
                buttonStyle={[
                    styles.button,
                    props.glowingEffect ? { borderColor: props.borderColor, borderWidth: 2 } : ""]}
                titleStyle={{ color: props.titleColor }}
                onPress={props.onClick}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: .5,
        borderRadius: 1,
        borderColor: 'green',
        borderBottomWidth: .5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5,
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: Colors.icons,

    },
})

export default SignIconButton;