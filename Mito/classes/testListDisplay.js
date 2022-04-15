import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Checkbox, Link, View } from "native-base"
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

export function CheckboxClass(){
  return (
      <View style={styles.container}>
        <Text>This is you to do list</Text>
        <Checkbox value="two">working</Checkbox>
      </View>
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