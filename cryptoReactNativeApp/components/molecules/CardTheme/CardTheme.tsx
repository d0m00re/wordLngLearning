import React, {useState, useEffect} from 'react';

import {Text,StyleSheet,Button,View, Dimensions} from 'react-native';

interface ICategorie {
    uuid : string;
    categorie : string;
    description: string;
}

interface IPropsCard {
    theme : ICategorie
};

function Card({theme} : IPropsCard) {
    return (
            <View style={styles.view}>
                <Text style={styles.title}>{theme.categorie}</Text>
                <Text style={styles.description}>{theme.description}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    view : {
        backgroundColor : '#61dafb',

        borderWidth : 4,
        borderColor : '#20232a',
        borderRadius : 6,

        margin : 8,
        padding: 8
    },
    title : {
        color : 'black',
        fontSize : 30
    },
    description : {
        color : 'black',
        fontSize : 16
    },
});

export default Card;