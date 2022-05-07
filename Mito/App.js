import MainHomeScreen from './classes/homeScreen.js';
import RewardsPage from "./classes/RewardsPage";
import { NativeBaseProvider} from "native-base";
import {NavigationContainer} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import MainHomeScreen from './classes/homeScreen.js';
//const MainStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" activeColor='#B9E276' inactiveColor='#94BDB8' barStyle = {{backgroundColor: '#FFFFFF'}}>
          <Tab.Screen name="Home" component={MainHomeScreen} options={{
                  tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home-variant" color={color} size={26} />
                  ),
                }}/>
            <Tab.Screen name="Rewards" component={RewardsPage} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="cash" color={color} size={26} />
                ),
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}