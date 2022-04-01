import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Checkbox, Link, View } from "native-base"


export default function CheckboxClass(){
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Text>This is you to do list</Text>
        <Checkbox value="two">working</Checkbox>
      </View>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'left',
  },
});