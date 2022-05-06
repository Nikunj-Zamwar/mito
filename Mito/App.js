import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CheckboxClass from './classes/CheckboxClass.js';
import { NativeBaseProvider, Link, Box } from "native-base"
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import { registerRootComponent } from 'expo';
import RewardsPage from './classes/RewardsPage.js';

const MainStack = createNativeStackNavigator();
export default function App(props) {
  return (
      <NavigationContainer>
    <NativeBaseProvider>
      <MainStack.Navigator>
        <MainStack.Screen name = "Home" component = {HomeScreen} />
        <MainStack.Screen name = "Checkbox Class" component = {CheckboxClass} />
        <MainStack.Screen name  = "Rewards Page" component = {RewardsPage} />
      </MainStack.Navigator>
    </NativeBaseProvider>
      </NavigationContainer>
  );
}

registerRootComponent(App); 

function HomeScreen(props){
  return(
  <View style={{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <Text>Open up App.js to start working on your app!</Text>
    <StatusBar style="auto" />
    <Link onPress={() => props.navigation.navigate('Checkbox Class')} mt = '8'>
      <Box px="3" py="2" bg="primary.400" rounded="lg" _text={{
        color: "white",
        fontWeight: "medium"
      }}>
        Press to go to your to do list
      </Box>
    </Link>

    <Link onPress={() => props.navigation.navigate('Rewards Page')} mt = '8'>
      <Box px="3" py="2" bg="primary.400" rounded="lg" _text={{
        color: "white",
        fontWeight: "medium"
      }}>
        Rewards Page
      </Box>
    </Link>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
