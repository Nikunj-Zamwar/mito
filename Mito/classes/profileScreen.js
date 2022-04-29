import React from 'react';
import {View, Box, VStack, Text, Flex, Center, Circle, Icon} from "native-base"
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {BalooBhaijaan2_600SemiBold} from '@expo-google-fonts/baloo-bhaijaan-2';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import {ScrollView} from 'react-native';

import {doc, onSnapshot} from 'firebase/firestore'
import {db} from "../firebase.js";

import {useState, useEffect} from 'react';

export default function ProfileScreen(){
    let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_600SemiBold});
    if(!fontsLoaded){
        return <AppLoading />
    }

    return(
        <ScrollView>
            <View pt = "50px">

            </View>
        </ScrollView>
    );
}