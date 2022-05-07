import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, Checkbox, View, Divider, Slider, TextArea, VStack, Box, Flex, Center } from "native-base"
import {NavigationContainer} from "@react-navigation/native";
import {StyleSheet, Text} from "react-native";

export default function MeetingAgendaClass(){
  return (
      <View style={styles.container}>
        <VStack space ={2} alignItems="center"> 
            <Text style={styles.textStyle} fontSize="6xl">Description Description Description Description Description Description Description Description Description
            Description Description DescriptionDescription Description DescriptionDescription Description Description
            Description Description DescriptionDescription Description DescriptionDescription Description Description</Text>
        </VStack>
        <Text style={styles.textStyle} fontSize="xs">Lets get started</Text>
        <Slider w="3/4" maxW="300" defaultValue={70} minValue={0} maxValue={100} accessibilityLabel="hello world" step={10}>
            <Slider.Track>
                <Slider.FilledTrack />
                </Slider.Track>
            <Slider.Thumb />
        </Slider>
        <Divider my="2" />
        <Flex h={40} alignItems="center">  
            <Flex direction='row' alignItems={'center'}>
                <Center size={6} style={{ borderColor: '#94BDB8', borderStyle: 'solid', borderWidth: 1,p: 4,}} rounded="xl" _text={{color: "black",fontWeight: "medium"}}>
                        1
                </Center>
                <Text>  Stand Up</Text>
            </Flex>
        </Flex>
        <Text>Notes</Text>
        <TextArea h={20} placeholder="Enter notes here" w="75%" maxW="300" />
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textStyle: {
    fontSize: 12,
    paddingBottom: 20,
  },
  checkboxStyle: {
    fontSize: 20,
  },
});