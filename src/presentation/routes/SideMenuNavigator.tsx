import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';

import { StackNavigator } from './StackNavigator';
import { globalColors } from '../theme/theme';
import { useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

    const dimenstions = useWindowDimensions()

    return (

        <Drawer.Navigator

            drawerContent={(props) => <CustomDrawerContent {...props} />}

            screenOptions={{

                drawerType: (dimenstions.width >= 758) ?'permanent': 'slide',

                headerShown: false,
                //drawerType: 'slide',
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerItemStyle: {
                    borderRadius: 100,
                    paddingHorizontal: 20
                },
                drawerStyle:{
                    width: 275
                }
            }}
        >
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props: DrawerContentComponentProps) => {

    return (
        <DrawerContentScrollView>
            <View style={{
                height: 200,
                backgroundColor: globalColors.primary,
                margin: 30,
                borderRadius: 50,
            }}/>

            <DrawerItemList { ...props} />
        </DrawerContentScrollView>
    )
}
