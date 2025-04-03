import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                sceneStyle: { backgroundColor: globalColors.background },
                //headerShown: false,
                headerStyle: {
                    elevation: 0,
                    //marginBottom: 6
                },
                tabBarStyle: {
                    elevation: 0,
                    borderTopWidth: 0
                }
            }}
        >
            <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<FontAwesome6 name="house" size={20} iconStyle="solid"  />) }} component={Tab1Screen} />
            <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<FontAwesome6 name="volume-high" size={20} iconStyle="solid"  />) }} component={TopTabsNavigator} />
            <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<FontAwesome6 name="calendar" size={20} iconStyle="solid"  />) }} component={StackNavigator} />
        </Tab.Navigator>
    );
}
