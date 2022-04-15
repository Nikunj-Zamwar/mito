import React from 'react';
import {View, Box, Container, VStack} from "native-base"
import {StyleSheet} from "react-native";
import {CheckBoxTest} from "./testListDisplay";

export default function HomeScreen(props){
    return(
        <View>
        <VStack space={4} alignItems="center">
            {/*Checklist for Active Meeting*/}
            <Box bg="#ffffff">
                <CheckBoxTest></CheckBoxTest>
            </Box>
            {/*Agenda for Active Meeting*/}

        </VStack>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'left',
    },
});