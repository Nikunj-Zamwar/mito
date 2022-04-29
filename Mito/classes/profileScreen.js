import React from 'react';
import {View, Box, VStack, Text, Flex, Center, Circle, Icon} from "native-base"
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {BalooBhaijaan2_600SemiBold, BalooBhaijaan2_500Medium} from '@expo-google-fonts/baloo-bhaijaan-2';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import {ScrollView, Dimensions} from 'react-native';
import {doc, onSnapshot} from 'firebase/firestore'
import {db} from "../firebase.js";

import {useState, useEffect} from 'react';

export default function ProfileScreen(){
    let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_600SemiBold, BalooBhaijaan2_500Medium});
    if(!fontsLoaded){
        return <AppLoading />
    }

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(
        <View pt = "50px" alignItems = "center">
            <Circle size ={windowWidth * 1.2} bottom = {windowHeight - 400} bg="#A0D6BB">
                <VStack pt = {windowHeight / 4.5} alignItems = "center">
                    <Text fontSize = "40px" fontFamily = "BalooBhaijaan2_600SemiBold" color = "white">ashley rivera</Text>
                    <Text fontSize = "32px" fontFamily = "BalooBhaijaan2_500Medium" color = "white">growth level: 2</Text>
                </VStack>
            </Circle>
        </View>
    );
}