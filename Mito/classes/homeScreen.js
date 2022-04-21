import React from 'react';
import {View, Box, VStack, Text} from "native-base"
import fonts from '../assets/css/fonts.js'

export default function HomeScreen(props){
    return(
        <View>
        <VStack space={4} alignItems="center">
            <Box width="80%" borderRadius="md" borderWidth="2px" borderColor="#A3C1AD" bg="#C4DF9D">
                <Text pl="15px" pt= "10px" color="#787874" textAlign="left" fontSize="13" fontFamily="Inter">work</Text>
                <Text pl="15px" pt= "5px" color="#656363" textAlign="left" fontSize="20" fontFamily="Baloo Bhaijaan 2">work</Text>
            </Box>
            {/*Agenda for Active Meeting*/}

        </VStack>
        </View>
    );
}