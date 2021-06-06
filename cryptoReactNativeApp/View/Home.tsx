import React, {useState} from 'react';

import {Text,StyleSheet,Button,View, TextInput} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


interface Props {
    navigation : any
};
//        <FontAwesome5 name={'comments'} solid />;

function Home({navigation} : Props) {
    return (
    <View>
        <Text>Learn English word</Text>
        <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("RandomWordList", {theme : 'Apple'})} // We added an onPress event which would navigate to the About screen
      />
        <FontAwesome5 name={'comments'} solid />

    </View>
)
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
});

export default Home;