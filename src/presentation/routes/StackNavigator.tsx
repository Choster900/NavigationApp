import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

export type RootStackParams = { // puede ser una interfaz tambien
    Home: undefined,
    Product: { id: number, name: string },
    Products: undefined,
    Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {

    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            headerShown: false,
        })
    }, [])


    return (
        <Stack.Navigator screenOptions={{
            //headerShown: true,
            headerStyle: {
                elevation: 10,
                shadowColor: 'transparent'
            }
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
