import {IWordList, ITheme} from 'shared';

import WordList from './WordList';

interface IGlobal { 
    tabWordList : WordList[]
};

export default class Global implements IGlobal {

    tabWordList : WordList[];
    constructor () {
        this.tabWordList = [];
    }


    pushWordList(wordlist : IWordList) {
        this.tabWordList.push(new WordList(wordlist));
    } 

    deleteWordList(uuid : string) {

    }

    findIndexWithUuid(uuid : string) : number {
        let id = this.tabWordList.findIndex(_wordList => _wordList.uuid === uuid);
        return id;
    }

    findIndexWithLabel(label : string) : number {
        let id = this.tabWordList.findIndex(_wordList => _wordList.theme === label);
        return id;
    }

    getThemeWithLabel(label : string) : WordList | undefined {
        let id = this.findIndexWithLabel(label);

        if (id === -1)
            return undefined;
        return this.tabWordList[id];
    }
    // [{}]
    getAllTheme() : ITheme[] {
        console.log('get all theme')
        console.log(this.tabWordList.map((_listword) => _listword.getInfoTheme()));
        console.log('-----')
        return this.tabWordList.map((_listword) => _listword.getInfoTheme());
    }
}  