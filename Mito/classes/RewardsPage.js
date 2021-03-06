import React  from 'react';
import {View, VStack, HStack, Box, Heading, Icon, Spacer, Flex, Circle} from 'native-base';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppLoading from 'expo-app-loading';
import {useFonts, Inter_400Regular} from '@expo-google-fonts/inter';
import {BalooBhaijaan2_600SemiBold} from '@expo-google-fonts/baloo-bhaijaan-2';
import {AntDesign } from '@expo/vector-icons';

function RewardsHomeScreen() {

  let [fontsLoaded] = useFonts({Inter_400Regular, BalooBhaijaan2_600SemiBold});
  if(!fontsLoaded){
      return <AppLoading />
  }

  return (
    <View style={styles.container}>
        <ScrollView>
        <VStack space={4} alignItems='center' w='94%' h='99%'>
            <Flex direction='row' flexWrap='wrap'>
                <RewardCard itemName='$25 cvs gift card' price='2,000'/>
                <RewardCard itemName='$25 dunkin donuts gift card' price='2,000'/>
                <RewardCard itemName='$60 cinemark movie tickets' price='5,000'/>
                <RewardCard itemName='$150 ballroom classes' price='5,000'/>
                <RewardCard itemName='$250 starbucks gift card' price='6,000'/>
                <RewardCard itemName='$300 care package' price='7,000'/>
            </Flex>
            <Heading style={styles.titlestyle}>Leaderboard April 2022</Heading>
            <LeaderBoardCard name='poop girl' score='3,000' place='1st'/>
            <LeaderBoardCard name='miss girl' score='2,000' place='2nd'/>
            <LeaderBoardCard name='girlie ya' score='500' place='3rd'/>
        </VStack>
      </ScrollView>
    </View>

  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Flex direction='column' alignSelf='flex-start' margin='3'>
        <Heading style={styles.titlestyle}>Rewards Collected</Heading>
        <Flex direction='row' flexWrap='wrap'>
                <RewardCard itemName='$25 cvs gift card' price='2,000'/>
        </Flex>
      </Flex>
    </View>
  );
}

function RewardCard(props) {
  return (<Flex alignItems='center' direction='column' h='130' w='109' margin='3' marginBottom='6'>
  <Box width='109' height='107' borderRadius="2xl" borderWidth="2px" borderColor='888885' bg="#FFFFFF" alignItems='center'>
  <Box padding='1'>
    <HStack alignItems='center'>
    <Box paddingRight='1'>
      <Icon as={AntDesign} name="questioncircleo" color="coolGray.400" _dark={{
            color: "warmGray.50"
          }} size='3'/>
    </Box>
    <Text style={{ textAlign: "center", color:'#888885' }}>{props.price}</Text>
    </HStack>
  </Box>
    <Icon as={AntDesign} name="questioncircleo" color="coolGray.400" _dark={{
          color: "warmGray.50"
        }} size='63'/>
  </Box>
  <Box margin='1' w='full'>
    <Text style={{ textAlign: "center", color:'#888885' }} >{props.itemName}</Text>
  </Box>
  </Flex>);
}

function LeaderBoardCard(props) {
  return (

    <Box borderRadius="2xl" bg="#DFE7EF" borderColor="#DFE7EF" w='94%' h='20' safeArea='3'>
    <Flex direction='row' margin='0' alignItems='center' justifyContent='center' h="full">

      <Heading>{props.place}</Heading>

      <Spacer/>

      <Circle bg='#FFFFFF' width='57' height='57' position='absolute' top='0' left='70'/>

      <Text style={{fontSize:20, color:'#888885', position:'absolute', left:'47%'}}>{props.name}</Text>
      
      <Spacer/>

      <Icon as={AntDesign} name="questioncircleo" color="coolGray.400" _dark={{
            color: "warmGray.50"
          }} size='4' marginRight='1'/>
      <Text>{props.score}</Text>

    </Flex>
    </Box>

  );
}

const Tab = createMaterialTopTabNavigator();

export default function RewardsPage(){
  return (
    <NavigationContainer independent='true'>
      <Tab.Navigator>
        <Tab.Screen name="Rewards" component={RewardsHomeScreen} />
        <Tab.Screen name="My Rewards" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titlestyle: {
    fontSize:30,
    fontStyle:'normal',
    fontWeight:'bold',
    paddingTop:10,
    paddingLeft:10,
    fontFamily:'BalooBhaijaan2_600SemiBold',
    alignSelf:'flex-start'
  },
  buttonContainer: {
    flex: 1,
  },
  buttonGroupContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height:20,
  },
  rewardNavigatorButton: {
    height: 15,
    backgroundColor: '#555',
    alignContent:'center'
  },
  text: {
    color:'black',
    fontFamily:'Inter_400Regular'
  }
});