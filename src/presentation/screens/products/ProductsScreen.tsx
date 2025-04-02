import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { globalStyles } from '../../theme/theme';
import { type NavigationProp, useNavigation } from '@react-navigation/native';
import { type RootStackParams } from '../../routes/StackNavigator';
const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Keyboard' },
    { id: 5, name: 'Mouse' },
    { id: 6, name: 'Monitor' },
    { id: 7, name: 'Printer' },
    { id: 8, name: 'Tablet' },
    { id: 9, name: 'Smartwatch' },
    { id: 10, name: 'Camera' }
];

export const ProductsScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    return (
        <View style={globalStyles.container}>

            <Text style={{ marginBottom: 10, fontSize: 30, }}>Productos</Text>

            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <PrimaryButton onPress={() => navigation.navigate('Product', { id: item.id, name: item.name })}
                        label={item.name}
                    />
                )}
            />

            <Text style={{ marginBottom: 10, fontSize: 30, }}>Ajuste</Text>

            <PrimaryButton onPress={() => navigation.navigate('Settings')}
                label='Ajuste'
            />
        </View>
    )
}
