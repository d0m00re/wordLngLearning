import express from 'express';
import IWord from './Types/IWord';
import WordList from './Entities/WordList';

import * as shared from 'shared';
import {IGlobal} from 'shared';
import GlobalApp from './Entities/Global';

import RouterAuth from './Routes/Auth';
import RouterWord from './Routes/Word';

import Global from './Entities/Global';

import data from './Asset/Data/ListWord/';

const bodyParser = require('body-parser');

const cors = require('cors');

//Global.globalApp = new Global;
//globalApp = new Global();
//globalApp = new Global();

// rest of the code remains same

/*
donc le server va hjuste abvoir pour objectif de delivrere des truc :
-> list word en foncftion d un certain theme

*/

//const _global = new Global();

/*
namespace NodeJs {
  let global = new Global();

  global.
}
*/

console.log(global)

//global.globalApp = new Global();

//declare global {
//  const _global : Global;
//}
let tabListWords = new Global();

//const testouille = 42;

const wordlist1 = new WordList(data.Animal);
const wordlist2 = new WordList(data.Fruit);

const wordlist3 = new WordList(data.Country);
const wordlist4 = new WordList(data.Tree);


tabListWords.pushWordList(wordlist2);
tabListWords.pushWordList(wordlist3);
tabListWords.pushWordList(wordlist4);
tabListWords.pushWordList(wordlist1);


const app = express();

app.set('tabListWords', tabListWords);

app.use(cors());
app.use(bodyParser.json());



app.use(RouterAuth);
app.use(RouterWord);

const PORT = 8000;

app.get('/', (req, res) => res.send(shared.hello()));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});