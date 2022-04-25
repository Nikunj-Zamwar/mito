import HomeScreen from './classes/homeScreen.js';
import { NativeBaseProvider} from "native-base"
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
const MainStack = createNativeStackNavigator();
import {useFonts, BalooBhaijaan2_700Bold} from '@expo-google-fonts/baloo-bhaijaan-2';
import {CheckBoxTest} from "./classes/testListDisplay";

export default function App() {
  useFonts({BalooBhaijaan2_700Bold});
  return (
      <NativeBaseProvider>
        <NavigationContainer>
          <MainStack.Navigator initalRouteName = "HomeScreen">
            <MainStack.Screen name = "Home" component = {HomeScreen}/>
            <MainStack.Screen name = "CheckboxClass" component = {CheckBoxTest} />
          </MainStack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}


