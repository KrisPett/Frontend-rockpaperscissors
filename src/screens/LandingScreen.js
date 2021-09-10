import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from '../components/Header';
import Colors from '../constants/Colors';
import StyleContainer from '../constants/StyleContainer';
import Dividers from '../components/Dividers';
import ConfirmButtons from '../components/ConfirmButtons';
import NameInput from '../components/NameInput';
import { TokenStore } from '../utils/TokenStore';
import { API } from '../routes/Api';

import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

function Landing({ navigation }) {
    const [newToken, setNewToken] = useContext(TokenStore);
    const [nameText, setNameText] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const isLoading = API.fetchToken()

    i18n.translations = {
        en: {
            btnConfirm: 'CONFIRM & PLAY',
            btnAnonymous: 'PLAY ANONYMOUS',
            inputText: "Type Name Here...",
            headLine1: "CREATE ACCOUNT",
            headLine2: "OR",
            headLine3: "PLAY ANONYMOUS",
        },
        sv: {
            btnConfirm: 'BEKRÄFTA & SPELA',
            btnAnonymous: 'SPELA ANONYM',
            inputText: "Skriv Namn Här...",
            headLine1: "SKAPA KONTO",
            headLine2: "ELLER",
            headLine3: "SPELE ANONYM",
        },
    };
    i18n.locale = Localization.locale;
    i18n.fallbacks = true;

    useEffect(() => {
        if (nameText.length > 1)
            setIsDisabled(false)
        else setIsDisabled(true)
    }, [nameText])

    btnConfirmName = () => {
        if (!isDisabled) {
            API.fetchCreateAccount(newToken, nameText);
            navigation.navigate('HomeScreen')
        }
    }

    btnAnonymousHandler = () => navigation.navigate('HomeScreen')

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={StyleContainer.container}>
                <View>
                    <Header />
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{i18n.t('headLine1')}</Text>
                        <Text style={styles.text}>{i18n.t('headLine2')}</Text>
                        <Text style={styles.text}>{i18n.t('headLine3')}</Text>
                    </View>
                    <View style={styles.divider}><Dividers /></View>
                    <View>
                        <NameInput
                            placeholder={i18n.t('inputText')}
                            setNameText={setNameText}
                        />
                        <ConfirmButtons
                            title={i18n.t('btnConfirm')}
                            onClick={btnConfirmName}
                            isDisabled={isDisabled}
                            isLoading={isLoading}
                        />
                    </View>
                    <View style={styles.divider}><Dividers /></View>
                    <View>
                        <ConfirmButtons
                            title={i18n.t('btnAnonymous')}
                            onClick={btnAnonymousHandler}
                            isLoading={isLoading}
                        />
                    </View>
                    <View style={styles.divider}><Dividers /></View>
                </View>
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    textContainer: {
        alignItems: "center",
        marginTop: 30,
    },
    text: {
        color: Colors.icons,
        fontWeight: "bold",
        fontSize: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.50)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1,
        fontFamily: "serif",
    },
    divider: {
        marginVertical: 20,
    },
})

export default Landing;