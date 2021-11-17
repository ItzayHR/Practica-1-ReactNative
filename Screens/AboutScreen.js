import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.bold}>Acerca de</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    bold:{
        fontWeight:'bold',
        fontSize:50,
        color:'#FFF',
    }
});