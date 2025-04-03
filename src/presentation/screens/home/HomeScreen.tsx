import React, { useEffect } from 'react'
import { Pressable, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { Text } from 'react-native-gesture-handler';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    return (
        <View style={globalStyles.container}>

            <HamburgerMenu />

            <PrimaryButton label='Productos' onPress={() => navigation.navigate('Products')} />

            <PrimaryButton label='Settings' onPress={() => navigation.navigate('Settings')} />

        </View>
    )
}
