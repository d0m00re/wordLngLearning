import {IWordList, IWord} from 'shared';
import { v4 as uuidv4 } from 'uuid';


export default class WordList implements IWordList {
    public wordList : IWord[];
    public theme : string;
    public length : number;
    public uuid : string;
    public description : string;
    public img : string;

    constructor(data : IWordList) {
        this.wordList = data.wordList;
        this.theme = data.theme;
        this.length = data.wordList.length;
        this.uuid = uuidv4();
        this.description = 'lorem ipsum me co ro nes et sta mi ka sa';
        this.img = '';
    };

    pushWord(word : IWord) {
        this.wordList.push(word);
        this.length += 1;
    }

    setTheme(theme : string) {
        this.theme = theme;
    }

    delete(id : number) : boolean {
        if (this.wordList.length <= id) {
            return false;
        }
        this.wordList.splice(id);
        this.length -= 1;
        return true;
    }

    importFromFile(filename : string) {

    }

    get(id : number) : IWord | null {
        if (id >= this.length)
            return null;
        return this.wordList[id];
    }

    getInfo() {
        return JSON.parse(JSON.stringify(this.wordList));
    }

    getInfoTheme() {
        return {
            theme : this.theme,
            description : this.description,
            uuid : this.uuid
        }
    }
}