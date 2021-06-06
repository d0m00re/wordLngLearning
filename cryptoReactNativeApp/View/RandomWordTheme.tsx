import React, { useState, useEffect } from 'react';

import { Text, StyleSheet, Button, View, TextInput } from 'react-native';
import ApiNetworkService from '../ApiAdapter/ApiNetworkService';


//---------------------

interface Props {
    navigation: any;
    route: any;
}

interface IWordDesc {
    origin: string[];
    translation: string[];
}


const checkValidTranslation = (resp: string, possibilities: string[]) => {
    return possibilities.findIndex(elem => elem === resp) !== -1;
}

/*
        fetch('http://192.168.1.11:8000/api/v1/word/random')
        .then(response => response.json())
        .then(responseJson => {
            setWordDesc(responseJson);
        })
        .catch(error => {
            console.log('error')
        });
    
*/
const getNewRandomWord = (theme : string, setWordDesc: React.Dispatch<React.SetStateAction<IWordDesc | undefined>>,
    setValid: React.Dispatch<React.SetStateAction<EState>>) => {

        // decoupling network request
        ApiNetworkService.getRandomWordTheme(theme)
        .then(word => {setWordDesc(word)});
        setValid(EState.WAIT_ANSWER);
};

const checkValidWord = (wordDesc : IWordDesc, currentText : string, setValid: React.Dispatch<React.SetStateAction<EState>>) => {
    if (wordDesc === undefined) return 0;
    let ret = checkValidTranslation(currentText, wordDesc.translation);
    setValid((ret) ? EState.GOOD_ANSWER : EState.BAD_ANSWER);
};


enum EState {
    WAIT_ANSWER,
    GOOD_ANSWER,
    BAD_ANSWER
}


function RandomWordTheme({ route, navigation }: Props) {

    const [valid, setValid] = useState<EState>(EState.WAIT_ANSWER);
    const [currentText, setCurrentText] = useState('');
    const [wordDesc, setWordDesc] = useState<IWordDesc | undefined>(undefined);


    



    useEffect(() => {
        let data = getNewRandomWord(route.params.theme, setWordDesc, setValid);
        console.log('data : ')
        console.log(data);

    }, [route.params.theme]);

    const { theme } = route.params;
    return (
        <View>
            { (wordDesc !== undefined && wordDesc?.origin?.length > 0 && wordDesc?.translation?.length > 0) &&
                <>
                    <Text>Find translation: {wordDesc.origin[0]}</Text>
                    <TextInput style={styles.input} onChangeText={(msg) => setCurrentText(msg)}>{currentText}</TextInput>

                    {
                        valid === EState.WAIT_ANSWER &&
                            <Button onPress={() => checkValidWord(wordDesc, currentText, setValid)} title='validate' />
                        
                    }
                    {
                        valid === EState.BAD_ANSWER &&
                        <>
                            <Button onPress={() => checkValidWord(wordDesc, currentText, setValid)} title='validate' />
                            <Text style={styles.falseResponse}>Invalid Translation</Text>
                            <Text>Answer : {wordDesc.translation[0]}</Text>
                        </>
                    }
                    {
                        valid === EState.GOOD_ANSWER &&
                        <>
                            <Button onPress={() => getNewRandomWord(route.params.theme, setWordDesc, setValid)} title='next' />
                            <Text style={styles.goodResponse}>Good translation</Text>
                        </>
                    }
                </>
            }
        </View>
    )
};


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    goodResponse: {
        color: 'green'
    },
    falseResponse: {
        color: 'red'
    }
});

export default RandomWordTheme;