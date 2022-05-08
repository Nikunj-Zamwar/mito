import React from 'react';
import {Checkbox, View } from "native-base"

export function CheckBoxTest(){
  return (
      <View>
          <Checkbox value="two">Ask 3 Questions</Checkbox>
          <Checkbox value="two">Be Awesome</Checkbox>
          <Checkbox value="two">Be EXTRA Awesome</Checkbox>
          <Checkbox value="two">add more playlists</Checkbox>
      </View>
  );
}