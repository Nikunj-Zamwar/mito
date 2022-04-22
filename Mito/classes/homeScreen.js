import React from 'react';
import {View, Box, VStack, Text} from "native-base"
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {BalooBhaijaan2_700Bold} from '@expo-google-fonts/baloo-bhaijaan-2';
export default function HomeScreen(props){
    let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_700Bold});
    if(!fontsLoaded){
        return <AppLoading />
    }
    return(
        <View>
        <VStack space={8} alignItems="center">
            <Box pl="15px" width="80%" borderRadius="md" borderWidth="2px" borderColor="#A3C1AD" bg="#C4DF9D">
                <Title text = "work"/>
                <Header text="stand up update"/>
            </Box>
            {/*Agenda for Active Meeting*/}
            <Box pl="15px" width="80%" borderRadius="md" borderWidth="2px" borderColor="#A3C1AD" bg="#C4DF9D">
                <Title text = "work"/>
                <Header text="meeting agenda"/>
            </Box>
        </VStack>
        </View>
    );
}

function Title(props) {
    return (<Text pt= "10px" color="#787874" fontSize="13" fontFamily="Inter_400Regular" letterSpacing=".18em">{props.text}</Text>);
}

function Header(props) {
    return (<Text pt= "5px" color="#656363" fontSize="20" fontFamily="BalooBhaijaan2_700Bold">{props.text}</Text>);
}