import { DrawerActions, useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Pressable, Text, View } from 'react-native'
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

export const HamburgerMenu = () => {

    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
                    <FontAwesome6 name="bars" size={20} iconStyle="solid" style={{ paddingLeft: 10 }} />
                </Pressable>
            )
        })
    }, [])
    return (<></>)
}
