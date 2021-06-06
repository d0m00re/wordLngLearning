import IGlobal from './types/IGlobal';
import IWord from './types/IWord';
import IWordList from './types/IWordList';
import ITheme from './types/ITheme';

function hello() : string {
    return 'RANDOM' + Date.now().toString();
}

export {
    IGlobal,
    IWord,
    IWordList,
    ITheme,
    hello
}; 