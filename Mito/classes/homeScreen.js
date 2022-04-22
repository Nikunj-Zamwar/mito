import React from 'react';
import {View, Box, VStack, Text} from "native-base"
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {BalooBhaijaan2_600SemiBold} from '@expo-google-fonts/baloo-bhaijaan-2';
export default function HomeScreen(){
    let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_600SemiBold});
    if(!fontsLoaded){
        return <AppLoading />
    }
    return(
        <View>

        <VStack space={8} alignItems="center">
            <Card color="#C4DF9D" borderColor = "#A3C1AD">
                <Title color = "#787874" text = "work"/>
                <Header size = "20px" color = "#656363" text = "stand up update"/>
            </Card>
            {/*Agenda for Active Meeting*/}
            <Card color="#94BDB8" borderColor = "#94BDB8">
                <Title color = "#FFFFFF" text = "work"/>
                <Header size = "18px" color = "#FFFFFF" text = "meeting agenda"/>
            </Card>
        </VStack>
        </View>
    );
}

function Card(props){
    return (
        <Box pl="15px" width="80%" borderRadius="md" borderWidth="2px" borderColor={props.borderColor} bg={props.color}>
        {props.children}
        </Box>);
}
function Title(props) {
    return (<Text pt= "10px" color={props.color} fontSize="13" fontFamily="Inter_400Regular" letterSpacing=".18em">{props.text}</Text>);
}

function Header(props) {
    return (<Text pt= "5px" color={props.color} fontSize={props.size} fontFamily="BalooBhaijaan2_600SemiBold">{props.text}</Text>);
}