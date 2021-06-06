import React from 'react';

import {Text,StyleSheet,Button,View} from 'react-native';

interface Props {

}

function RandomWordTheme({} : Props) {
    return (
        <View> 
            <Text>Random word theme : theme</Text>
        </View>
)
};


const styles = StyleSheet.create({
    container: {
        marginVertical: 8
    },
    buttonTest: {
        color : 'red'
    },
    fixToText: {
        marginVertical: 8,
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
});

export default RandomWordTheme;