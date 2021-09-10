import React from 'react';
import { View, StyleSheet } from 'react-native';
import { faHome, faHandRock, faList, faHistory } from '@fortawesome/free-solid-svg-icons';
import IconNavButton from './IconNavButton';

function NavBar({ navigation, isDisabled }) {
    const home = () => { if (!isDisabled) navigation.navigate('HomeScreen') }
    const games = () => { if (!isDisabled) navigation.navigate('SelectScreen') }
    const lists = () => { if (!isDisabled) navigation.navigate('ListsScreen') }
    const history = () => { if (!isDisabled) navigation.navigate('HistoryScreen') }

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <IconNavButton icon={faHome} title="Home" onClick={home} />
                <IconNavButton icon={faHandRock} title="Game" onClick={games} />
                <IconNavButton icon={faList} title="Lists" onClick={lists} />
                <IconNavButton icon={faHistory} title="History" onClick={history} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
})

export default NavBar;