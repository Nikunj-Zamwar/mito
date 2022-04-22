import HomeScreen from './classes/homeScreen.js';
import { NativeBaseProvider} from "native-base"
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
const MainStack = createNativeStackNavigator();
import {useFonts, BalooBhaijaan2_700Bold} from '@expo-google-fonts/baloo-bhaijaan-2';

export default function App() {
  useFonts({BalooBhaijaan2_700Bold});
  return (
      <NavigationContainer>
    <NativeBaseProvider>
      <MainStack.Navigator>
        <MainStack.Screen name = "Home" component = {HomeScreen}/>
        {/*<MainStack.Screen name = "Checkbox Class" component = {CheckboxClass} />*/}
      </MainStack.Navigator>
    </NativeBaseProvider>
      </NavigationContainer>
  );
}


