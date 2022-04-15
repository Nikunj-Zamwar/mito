import React from 'react';
import {Container, VStack} from "native-base"
import {StyleSheet} from "react-native";

export default function HomeScreen(props){
    return(
        <VStack space={4} alignItems="center">
            {/*Checklist for Active Meeting*/}
            <Container>

            </Container>
            {/*Agenda for Active Meeting*/}
            <Container>

            </Container>
        </VStack>
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