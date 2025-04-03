import React, { useEffect } from 'react'
import { Pressable, View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackParams } from '../../routes/StackNavigator'
import { globalStyles } from '../../theme/theme'
import { HamburgerMenu } from '../../components/shared/HamburgerMenu'

export const ProfileScreen = () => {

    const { top } = useSafeAreaInsets()


    const navigation = useNavigation<NavigationProp<RootStackParams>>()


    return (
        <View style={{
            paddingHorizontal: 20,
            marginTop: top,
            ...globalStyles.container
        }}>
            <HamburgerMenu />
            <Text style={{ marginBottom: 10 }} >Profile Screen</Text>
        </View>
    )
}
