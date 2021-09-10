import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

function Dividers() {
    return (
        <View>
            <Divider style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: 'black',
        height: 2,
    },
})


export default Dividers;