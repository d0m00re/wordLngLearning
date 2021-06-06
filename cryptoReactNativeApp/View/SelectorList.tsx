import React, {useState, useEffect} from 'react';

import {Text,StyleSheet,Button,View, ScrollView} from 'react-native';

import CardTheme from './../components/molecules/CardTheme/CardTheme';
import ApiNetworkService from './../ApiAdapter/ApiNetworkService';

interface Props {
    route : any;
    navigation : any;
}

interface ICategorie {
    uuid : string;
    theme : string;
    description : string; 
}

const getAllThemeReq = 'api/v1/theme';


function SelectorList({route, navigation} : Props)  {
    const [themes, setThemes] = useState<ICategorie[]>([]);
 
    const getTheme = () => {
        ApiNetworkService.getAllTheme()
        .then(resp => {
            if (resp !== null)
                setThemes(resp);
        })        
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
                themes.map(elem => <CardTheme key={elem.theme} theme = {elem} onClick= {() => navigation.navigate("RandomWordList", {theme : elem.theme})} />)
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