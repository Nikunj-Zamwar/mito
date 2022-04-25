import HomeScreen from './classes/homeScreen.js';
import { NativeBaseProvider} from "native-base"
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
const MainStack = createNativeStackNavigator();
import {CheckBoxTest} from "./classes/testListDisplay";

export default function App() {
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <MainStack.Navigator initalRouteName = "CheckboxClass">
            <MainStack.Screen name = "Home" component = {HomeScreen}/>
            <MainStack.Screen name = "CheckboxClass" component = {CheckBoxTest} />
          </MainStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}


