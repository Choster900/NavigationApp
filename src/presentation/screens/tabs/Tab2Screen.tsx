import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text, TouchableOpacity } from 'react-native-gesture-handler'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const Tab2Screen = () => {
    return (
        <View style={styles.container}>
            <HamburgerMenu />

            <Text style={styles.title}>Welcome to Tab 2</Text>
            <Text style={styles.subtitle}>This is a more engaging view!</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Click Me</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#f0f8ff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
