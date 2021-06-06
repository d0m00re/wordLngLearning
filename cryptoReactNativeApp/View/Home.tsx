import React, {useState} from 'react';

import {Text,StyleSheet,Button,View, TextInput} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import * as persistSt from './../PersistStore/utils';

interface Props {
    navigation : any
};
//        <FontAwesome5 name={'comments'} solid />;

interface ITupple  {
    key : string,
    value : string
}

const TryPersistStorage = () => {

    const [elem, setElem] = useState<ITupple>({key : '', value : ''});
    const [result, setResult] = useState<string>('');

    return (
        <>
            <Text>Key</Text>
            <TextInput onChangeText={(key : string) => setElem({...elem, key : key})}>{elem.key}</TextInput>
        
            <Text>Value</Text>
            <TextInput onChangeText={(value : string) => setElem({...elem, value : value})}>{elem.value}</TextInput>

            <Text>Get Value</Text>
            <Text>{result}</Text>

            <Button onPress={() => {persistSt.storeStringData(elem.key, elem.value)}} title={'Save'} />
            <Button onPress={() => {
                let _data = persistSt.getStringData(elem.key);
                _data.then((_elem : string | undefined) => {
                    console.log('elem'); console.log(_elem)
                    if(_elem !== undefined) setResult(_elem)})
               ;
            }} title={'Get'} />

        </>
    );
}

function Home({navigation} : Props) {
    return (
    <View>
        <Text>Learn English word</Text>
        <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("RandomWordList", {theme : 'Apple'})} // We added an onPress event which would navigate to the About screen
      />
        <FontAwesome5 name={'comments'} solid />
        <TryPersistStorage />
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