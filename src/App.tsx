import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Text } from 'react-native';
import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabNavigator } from './presentation/routes/BottomTabsNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>

            <NavigationContainer>

                {/* <StackNavigator /> */}
                <SideMenuNavigator />
                {/* <BottomTabNavigator /> */}
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}



export default App;
