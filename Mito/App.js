import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Checkbox from './classes/CheckboxClass';
import { NativeBaseProvider, Link, Box } from "native-base"
import { createStackNavigator, createAppContainer } from 'react-navigation';    

export default function App() {
  return (
    <NativeBaseProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <Link onPress={() => this.props.navigation.navigate('CheckboxClass')} mt = '8'>
            <Box px="3" py="2" bg="primary.400" rounded="sm" _text={{
                color: "white",
                fontWeight: "medium"
              }}>
              Press to go to your to do list
            </Box>
          </Link>
        </View>
    </NativeBaseProvider>
  );
}


// import { NativeBaseProvider, Box } from "native-base";

// export default function App() {
//   return (
//     <NativeBaseProvider>
//       <Box>Hello world</Box>
//     </NativeBaseProvider>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'left',
  },
});
