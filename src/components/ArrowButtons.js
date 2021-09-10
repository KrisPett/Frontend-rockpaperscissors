import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from "react-native-elements";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Colors from '../constants/Colors'

function ArrowButtons(props) {
    return (
        <View style={{ width: 75 }}>
            <Button buttonStyle={{ borderRadius: 100, backgroundColor: Colors.color }}
                icon={<FontAwesomeIcon
                    icon={props.icon}
                    size={60}
                    color={Colors.icons}
                    color={Colors.icons}
                    style={{ alignContent: "center" }}
                />}
                onPress={props.onClick}
            />
        </View>
    );
}

const styles = StyleSheet.create({

})

export default ArrowButtons;