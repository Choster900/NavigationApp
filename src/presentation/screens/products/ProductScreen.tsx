import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { View, Text } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';


export const ProductScreen = () => {

    const { id, name } = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

    const navigation = useNavigation()


    useEffect(() => {

        navigation.setOptions({
            title: name
        })
    }, [])


    return (
        <View style={globalStyles.container}>
            <Text>Produc  -  Screen</Text>

            <Text style={{
                fontSize: 20,
                textAlign: 'center',
                marginTop: 20,
            }}>{id} - {name}</Text>
        </View>
    )
}
