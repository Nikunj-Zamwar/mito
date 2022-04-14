import CheckboxClass from './classes/CheckboxClass.js';
import HomeScreen from './classes/homeScreen.js';
import { NativeBaseProvider} from "native-base"
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";

const MainStack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
    <NativeBaseProvider>
      <MainStack.Navigator>
        <MainStack.Screen name = "Home" component = {HomeScreen} />
        <MainStack.Screen name = "Checkbox Class" component = {CheckboxClass} />
      </MainStack.Navigator>
    </NativeBaseProvider>
      </NavigationContainer>
  );
}


