import React from 'react';
import {Image, View, VStack, Text, Flex, Circle} from "native-base"
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {BalooBhaijaan2_600SemiBold, BalooBhaijaan2_500Medium} from '@expo-google-fonts/baloo-bhaijaan-2';
import {ScrollView, Dimensions} from 'react-native';
import {doc, onSnapshot} from 'firebase/firestore'
import {db} from "../firebase.js";
import {useState, useEffect} from 'react';

const tempProfileImage = require("../assets/tempProfile.png");

export default function ProfileScreen(){
    let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_600SemiBold, BalooBhaijaan2_500Medium});
    if(!fontsLoaded){
        return <AppLoading />
    }

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(
        <View alignItems = "center" borderWidth = "1px" bottom = {windowHeight - 450}>
            <Circle size ={windowWidth * 1.2}  bg="#A0D6BB">
                <VStack pt = {windowHeight / 3.2} alignItems = "center">
                    <Text fontSize = "40px" fontFamily = "BalooBhaijaan2_600SemiBold" color = "white">ashley rivera</Text>
                    <Text fontSize = "32px" fontFamily = "BalooBhaijaan2_500Medium" color = "white">growth level: 2</Text>
                    <Flex direction="row">
                        <Text fontSize = "20px" fontFamily = "Inter_400Regular" color = "white">50 collected</Text>
                    </Flex>
                </VStack>
            </Circle>
            <Flex width = "50%">
                <Image bottom = "59px" resizeMode = "contain" source={tempProfileImage} alt ="Profile Picture"/>
            </Flex>
        </View>
    );
}