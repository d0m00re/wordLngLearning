import React, {useState} from 'react';

import {Text,StyleSheet,Button,View, TextInput} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


interface Props {

};
//        <FontAwesome5 name={'comments'} solid />;

function Home({} : Props) {
    return (
    <View>
        <Text>Learn English word</Text>
        <FontAwesome5 name={'comments'} solid />
        <FontAwesome5 name={'comments'} solid />
        <FontAwesome5 name={'comments'} solid />
        <FontAwesome5 name={'comments'} solid />
        <FontAwesome5 name={'comments'} solid />
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