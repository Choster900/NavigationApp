import React, { useEffect } from 'react'
import { Pressable, View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { RootStackParams } from '../../routes/StackNavigator';
import { Text } from 'react-native-gesture-handler';

export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    useEffect(() => {

        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )}>
                    <Text>Menu</Text>
                </Pressable>
            )
        })


    }, [])


    return (
        <View style={globalStyles.container}>

            <PrimaryButton label='Productos' onPress={() => navigation.navigate('Products')} />

            <PrimaryButton label='Settings' onPress={() => navigation.navigate('Settings')} />

        </View>
    )
}
