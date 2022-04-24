import React from 'react';
import {View, Box, VStack, Text, Flex, Center, Circle, Icon} from "native-base"
import {Feather} from '@expo/vector-icons'
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import {BalooBhaijaan2_600SemiBold} from '@expo-google-fonts/baloo-bhaijaan-2';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {ScrollView} from 'react-native';

import {collection} from 'firebase/firestore'
import {db} from "../firebase.js";
const checklistRef = collection(db, "premadeChecklists");

export default function HomeScreen(){
    let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_600SemiBold});
    if(!fontsLoaded){
        return <AppLoading />
    }
    return(
        <ScrollView>
        <View pt = "50px">
        <VStack space={8} alignItems="center">
            <Card color="#C4DF9D" borderColor = "#A3C1AD" dividerColor ="#C4C9BD" type="checklist">
                <Title color = "#787874" text = "work"/>
                <Header size = "20px" color = "#656363" text = "stand up update"/>
                <Icon as ={MaterialCommunityIcons} name="clipboard-text-outline" size={21} color = "#787874"/>
            </Card>
            {/*Agenda for Active Meeting*/}
            <Card color="#94BDB8" borderColor = "#94BDB8" dividerColor = "#C4C9BD" type="agenda">
                <Title color = "#FFFFFF" text = "work"/>
                <Header size = "18px" color = "#FFFFFF" text = "meeting agenda"/>
                <Icon as ={MaterialCommunityIcons} name="clipboard-text-outline" size={21} color = "#FFFFFF"/>
            </Card>
        </VStack>
        </View>
        </ScrollView>
    );
}

function Card(props){
    let content;
    if(props.type === "agenda"){
        content = <Agenda />
    }
    else{
        content = <MeetingCheckbox />
    }
    return (
        <Box width="80%" borderRadius="md" borderWidth="2px" borderColor={props.borderColor} bg="#FFFFFF">
            <Box pl="15px" pb = "5px" bg = {props.color} borderBottomColor = {props.dividerColor} borderBottomWidth = "1px">
                {props.children}
            </Box>
            {content}
        </Box>
    );
}

function Title(props) {
    return (<Text pt= "10px" color={props.color} fontSize="13" fontFamily="Inter_400Regular" letterSpacing=".18em">{props.text}</Text>);
}

function Header(props) {
    return (<Text pt= "5px" pb = "10px" color={props.color} fontSize={props.size} fontFamily="BalooBhaijaan2_600SemiBold">{props.text}</Text>);
}

async function MeetingCheckbox(){
    const checkListSnap = await checklistRef.where('id', '==', 'SR6jxAjN9lXC38mSazAJ').get();
    console.log(checkListSnap[0]);
    const items = {
        "explain the current dilemmas" : true,
        "show current set up update": false,
        "github setup invites": false,
        "current blockers": true,
        "missing meetings": false
    }
    //Make Checklist
    //TODO: Give elements unique ids
    const listItems = Object.keys(items).map((item, index) =>
        <Flex pl = "15px" pt ={index === 0 ? "20px" : "5px"} pb = "15px" direction="row">
            <Center size={6} borderColor = "#C8D2B0" borderWidth="1px" borderRadius = "2px">
               <Icon as={Feather} name="check" color = {items[item] ? "#888885" : "#FFFFFF"}/>
            </Center>
            <Text pl="10px" fontFamily="Inter_400Regular" color = "#888885">{item}</Text>
        </Flex>
    );
    return(listItems);
}
function Agenda(){
    //Get from database
    const items = ["stand up (5 minutes)", "deliverables (20 minutes)", "new assignment (10 minutes)", "q&a (5 minutes)"]
    //Make Agenda
    //TODO: Give elements unique ids
    const listItems = items.map((item, index) =>
        <Flex pl = "15px" pt ={index === 0 ? "20px" : "5px"} pb = "15px" direction="row">
            <Circle size={6} rounded="xl" borderColor = "#94BDB8" borderWidth="1.5px">
                <Text fontFamily="Inter_400Regular" color ="#787874">{index + 1}</Text>
            </Circle>
            <Text pl="10px" fontFamily="Inter_400Regular" color = "#888885">{item}</Text>
        </Flex>
    );
    return(listItems);
}