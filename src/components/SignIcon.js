import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function SignIcon(props) {
    return (
        <View>
            <FontAwesomeIcon
                icon={props.icon}
                size={60}
                color={props.color}
            />
        </View>
    );
}

export default SignIcon;