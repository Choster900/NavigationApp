import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

export const SettingsScreen = () => {

    const navigator = useNavigation()
    return (
        <View style={globalStyles.container}>

            <Text>Settings Screen</Text>

            <PrimaryButton
                label='Regresar al Home'
                onPress={() => navigator.dispatch(StackActions.popToTop)}
            />
        </View>
    )
}
