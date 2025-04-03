import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.description}>
                Welcome to our app! We are dedicated to providing the best experience for our users.
                Our team works hard to ensure quality and innovation in everything we do.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
    },
})
