import React from 'react';
import {View, Box, VStack, Text} from "native-base"
import { useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import {BalooBhaijaan2_700Bold} from '@expo-google-fonts/baloo-bhaijaan-2';
export default function HomeScreen(props){
    useFonts({Inter_400Regular, BalooBhaijaan2_700Bold});

    return(
        <View>
        <VStack space={4} alignItems="center">
            <Box width="80%" borderRadius="md" borderWidth="2px" borderColor="#A3C1AD" bg="#C4DF9D">
                <Text pl="15px" pt= "10px" color="#787874" textAlign="left" fontSize="13" fontFamily="Inter_400Regular">work</Text>
                <Text pl="15px" pt= "5px" color="#656363" textAlign="left" fontSize="20" fontFamily="BalooBhaijaan2_700Bold">work</Text>
            </Box>
            {/*Agenda for Active Meeting*/}

        </VStack>
        </View>
    );
}