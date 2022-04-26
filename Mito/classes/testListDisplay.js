import React from 'react';
import {Checkbox, View } from "native-base"

export function CheckBoxTest(){
  return (
      <View>
          <Checkbox value="two">Explain the current dilemmas</Checkbox>
          <Checkbox value="two">Show current set up update</Checkbox>
          <Checkbox value="two">Github setup invites</Checkbox>
          <Checkbox value="two">Current blockers</Checkbox>
          <Checkbox value="two">Missed meetings</Checkbox>
      </View>
  );
}