import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import PlayButton from '../components/PlayButton'
import Header from '../components/Header';
import Colors from '../constants/Colors';
import StyleContainer from '../constants/StyleContainer';
import NavBar from '../components/NavBar';
import { faHandPaper, faHandRock, faHandScissors } from '@fortawesome/free-solid-svg-icons';
import SignIcon from '../components/SignIcon';

function Home({ navigation }) {
    const btnPlay = () => {
        navigation.navigate('SelectScreen')
    }

    return (
        <View style={StyleContainer.container}>
            <View style={styles.container}>
                <Header />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.handPaperIcon} onPress={btnPlay}>
                        <SignIcon
                            icon={faHandPaper}
                            color={Colors.paper}
                        />
                    </TouchableOpacity>
                    <View style={styles.playButtonContainer}>
                        <TouchableOpacity style={styles.handRockIcon} onPress={btnPlay}>
                            <SignIcon
                                icon={faHandRock}
                                color={Colors.rock}
                            />
                        </TouchableOpacity>
                        <PlayButton onClick={btnPlay} />
                        <TouchableOpacity style={styles.handSiccorsIcon} onPress={btnPlay}>
                            <SignIcon
                                icon={faHandScissors}
                                color={Colors.scissors}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.navBarContainer}>
                    <NavBar navigation={navigation} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,

    },
    navBarContainer: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 20
    },
    icons: {
        width: 100,
        height: 100
    },
    playButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    handRockIcon: {
        marginRight: 50
    },
    handPaperIcon: {
        marginBottom: 50,
        marginRight: 5
    },
    handSiccorsIcon: {
        marginLeft: 50
    },
})

export default Home;
