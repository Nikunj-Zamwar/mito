import React from 'react';
import {View, Box, Container, VStack} from "native-base"
import {StyleSheet} from "react-native";
import CheckboxClass from "./CheckboxClass.js";

export default function HomeScreen(props){
    return(
        <View>
        <VStack space={4} alignItems="center">
            {/*Checklist for Active Meeting*/}
            <Box bg="#ffffff">
                <CheckboxClass></CheckboxClass>
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