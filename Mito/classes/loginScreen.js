import { Button, StyleSheet, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Button style = {styles.Button}>School</Button>
      <Button>Business</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button : {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    
    backgroundColor: '#A0D6BB',
    borderRadius: 20,
  },
});