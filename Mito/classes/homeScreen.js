import React from 'react';
import {Box, Link, View} from "native-base"
import {StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";

export default function HomeScreen(props){
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Link onPress={() => props.navigation.navigate('Checkbox Class')} mt = '8'>
                <Box px="3" py="2" bg="primary.400" rounded="sm" _text={{
                    color: "white",
                    fontWeight: "medium"
                }}>
                    Press to go to your to do list
                </Box>
            </Link>
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