import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './classes/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <LoginScreen />
    </View>
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
    justifyContent: 'center',
  },
});
