import React, {useState, useEffect} from 'react';

import {Text,StyleSheet,Button,View, ScrollView} from 'react-native';

import CardTheme from './../components/molecules/CardTheme/CardTheme';

interface Props {

}

interface ICategorie {
    uuid : string;
    categorie : string;
    description: string;
}

interface ICategorie2 {
    uuid : string;
    theme : string;
    description : string; 

}

const getAllThemeReq = 'api/v1/theme';


function SelectorList({} : Props)  {
    const [themes, setThemes] = useState<ICategorie2[]>([]);
 
    const getTheme = () => {
        
        console.log('Get theme')
        fetch(`http://192.168.1.11:8000/${getAllThemeReq}`)
        .then(response =>response.json())
        .then(responseJson => {
            setThemes(responseJson);
        })
        .catch(error => {
            console.log('error')
            console.log(error)
        });
        
    }

    useEffect(() => {
        getTheme();
    }, []);

    return (
        <View>
            <Text style={styles.mainTitle}>Select word list theme</Text>
            <View style={styles.containerTheme}>
            <ScrollView>
            {themes !== null && 
                themes.map(elem => <CardTheme key={elem.theme} theme = {elem} />)
            }
            </ScrollView>

            </View>
            <View style={styles.button}>
                <Button  onPress={getTheme} title='refresh'/>
            </View>
        </View> 
)
};

const styles = StyleSheet.create({
    containerTheme : {
        display: 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',

        margin : 8
    },
    button : {
        marginVertical : 8
    },
    mainTitle : {
        fontSize : 64
    }
});

export default SelectorList;