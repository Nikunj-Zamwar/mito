import React from 'react';
import {Image, View, VStack, Text, Flex, Circle, HStack} from "native-base"
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {BalooBhaijaan2_600SemiBold, BalooBhaijaan2_500Medium} from '@expo-google-fonts/baloo-bhaijaan-2';
import {ScrollView, Dimensions} from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const tempProfileImage = require("../assets/PlantGrowth1.png");

export default function ProfileScreen(){
    let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_600SemiBold, BalooBhaijaan2_500Medium});
    if(!fontsLoaded){
        return <AppLoading />
    }

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return(
        <ScrollView>
        <View alignItems = "center" bottom ={windowHeight - 450}>
            <Flex alignItems ="center">
                <Circle size ={windowWidth * 1.2}  bg="#A0D6BB">
                    <VStack pt = {windowHeight / 3.2} alignItems = "center">
                        <Text fontSize = "40px" fontFamily = "BalooBhaijaan2_600SemiBold" color = "white">ashley rivera</Text>
                        <Text fontSize = "32px" fontFamily = "BalooBhaijaan2_500Medium" color = "white">growth level: 2</Text>
                        <Flex direction="row">
                            <Fontisto name="blood-drop" size={28} color="#83DBFF"/>
                            <Text fontSize = "20px" fontFamily = "Inter_400Regular" color = "white"> 50 collected</Text>
                        </Flex>
                    </VStack>
                </Circle>
                <Flex width = "60%" bottom={230}>
                    <Image resizeMode = "contain" source={tempProfileImage} alt ="Profile Picture"/>
                    <Flex direction="row"  bottom = "260px">
                        <Fontisto name="blood-drop" size={28} color="#83DBFF"/>
                        <Text margin = "auto" fontSize = "20px" fontFamily = "Inter_400Regular" color = "#94BDB8">50 needed to grow!</Text>
                    </Flex>
                </Flex>
            </Flex>
        </View>
        </ScrollView>
    );
}