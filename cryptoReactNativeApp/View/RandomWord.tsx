import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { C_FULL_ADDR } from './../Constant/Server';
import { Text, StyleSheet, Button, View, TextInput } from 'react-native';

interface IWordDesc {
    origin: string[];
    translation: string[];
}

/*
    valid: boolean | null;
    setValid: any;
    wordDesc: IWordDesc;
*/
interface Props {

}

const checkValidTranslation = (resp: string, possibilities: string[]) => {
    return possibilities.findIndex(elem => elem === resp) !== -1;
}

//function RandomWord({valid, setValid, wordDesc} : Props) {

function RandomWord({ }: Props) {
    const [valid, setValid] = useState<boolean | null>(null);
    const [currentText, setCurrentText] = useState('');
    const [wordDesc, setWordDesc] = useState<IWordDesc | undefined>(undefined);



    const getNewRandomWord = () => {
        const opt = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        } 
        fetch('http://192.168.1.11:8000/api/v1/word/random')
            .then(response => response.json())
            .then(responseJson => {
                setWordDesc(responseJson);
            })
            .catch(error => {
                console.log('error')
            });
            setValid(false);
    };

    useEffect(() => {
        getNewRandomWord();
    }, [])

    const checkValidWord = () => {
        if (wordDesc === undefined) return 0;
        let ret = checkValidTranslation(currentText, wordDesc.translation);
        setValid(ret);
    };

    return (
        <View>
            { wordDesc !== undefined &&
                <>
                    <Text>Find translation: {wordDesc.origin[0]}</Text>
                    <TextInput style={styles.input} onChangeText={(msg) => setCurrentText(msg)}>{currentText}</TextInput>
                    
                    {
                       valid === false &&
                       <>
                            <Button onPress={checkValidWord} title='validate' />
                            <Text style={styles.falseResponse}>Invalid Translation</Text>
                        </>
                    }
                    {
                        valid === true &&
                        <>
                            <Button onPress={getNewRandomWord} title='next' />
                            <Text style={styles.goodResponse}>Good translation</Text>
                        </>
                    }
                </>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
    goodResponse: {
        color : 'green'
    },
    falseResponse : {
        color : 'red'
    }
});

export default RandomWord;