import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHandPointLeft } from '@fortawesome/free-solid-svg-icons';
import Colors from '../constants/Colors'

function BackButton({ onTriggerAlert, disableAlert }) {
    return (
        <TouchableOpacity
            onPress={onTriggerAlert}
            disabled={disableAlert}
        >
            <FontAwesomeIcon
                icon={faHandPointLeft}
                color={Colors.scissors}
                size={50}
            />
        </TouchableOpacity >
    );
}

export default BackButton;