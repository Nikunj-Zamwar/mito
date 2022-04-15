import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Checkbox, Link, View } from "native-base"
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

export function CheckBoxTest(){
  return (
      <View style={styles.container}>
          <Checkbox value="two">Explain the current dilemmas</Checkbox>
          <Checkbox value="two">Show current set up update</Checkbox>
          <Checkbox value="two">Github setup invites</Checkbox>
          <Checkbox value="two">Current blockers</Checkbox>
          <Checkbox value="two">Missed meetings</Checkbox>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#coolGray.600',
    alignItems: 'left',
    justifyContent: 'left',
  },
});