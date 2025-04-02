import React, { useEffect } from 'react'
import { Pressable, View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'

export const ProfileScreen = () => {

    const { top } = useSafeAreaInsets()

    // const navigation = useNavigation()

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <Text>Menu</Text>
                </Pressable>
            )
        })

    }, [])

    return (
        <View style={{
            paddingHorizontal: 20,
            marginTop: top,
            ...globalStyles.container
        }}>
            <Text style={{ marginBottom: 10 }} >Profile Screen</Text>

            <PrimaryButton
                onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer) }}
                label='Abrir Menu'
            />
        </View>
    )
}
