import { Alert } from 'react-native';

function AlertConfirm(onYes, onNo) {
    Alert.alert(
        "QUIT GAME!",
        "Do you really want to leave the game?",
        [
            {
                text: "NO",
                onPress: onNo,
                style: "cancel"
            },
            {
                text: "YES",
                onPress: onYes,
            }
        ]
    );
}

export default AlertConfirm;