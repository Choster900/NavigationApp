import { StyleSheet } from "react-native";

export const globalColors = {
    primary: '#6200EE',
    primaryVariant: '#3700B3',
    secondary: '#03DAC6',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    error: '#B00020',
    onPrimary: '#FFFFFF',
    onSecondary: '#000000',
    onBackground: '#000000',
    onSurface: '#000000',
    onError: '#FFFFFF',
};


export const globalStyles = StyleSheet.create({


    container: {
        flex: 1,
        padding: 20,
        backgroundColor: globalColors.background
    },

    primaryButton: {
        backgroundColor: globalColors.primary,
        borderRadius: 5,
        padding: 10,
        //margin: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },

    buttonText: {
        color: globalColors.background,
        fontSize: 10
    }
})
