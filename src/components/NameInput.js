import React from 'react';
import { View } from 'react-native';
import { Input } from 'react-native-elements';

function NameInput(props) {
    return (
        <View>
            <Input
                placeholder={props.placeholder}
                onChangeText={props.setNameText}
            />
        </View>
    );
}

export default NameInput;