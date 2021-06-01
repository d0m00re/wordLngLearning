import IWord from '../Types/IWord';

export default class Word {
    private wordList : IWord[];
    public length : number;
    constructor() {
        this.wordList = [];
        this.length = 0;
    }

    push(word : IWord) {
        this.wordList.push(word);
        this.length += 1;
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
}