import HomeScreen from './classes/homeScreen.js';
import { NativeBaseProvider} from "native-base"
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
const MainStack = createNativeStackNavigator();

export default function App() {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <MainStack.Navigator>
            <MainStack.Screen name = "Home" component = {HomeScreen}/>
          </MainStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}

