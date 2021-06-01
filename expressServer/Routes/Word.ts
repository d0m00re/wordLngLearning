import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

import IWord from '../Types/IWord';
import Word from '../Entities/Word';

import * as data from '../Asset/Data/ListWord';


let ListWord = new Word();

function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }
  
  const initListWord = () => {
    for (let i = 0; i < data.default.Animal.length;i++){
      ListWord.push(data.default.Animal[i]);
    }
  }
  const init = () => {
    initListWord();
  }
  
  init();

// use for : ui theme selector card ui
interface ICategorie {
    uuid : string;
    categorie : string;
    description: string;
}

let allCategorie : ICategorie[] = [
    {uuid : uuidv4(), categorie : 'animal', description : 'lorem ipsum mes ipsum de no ma ki a de john aaa'},
    {uuid : uuidv4(), categorie : 'fruit', description : 'lorem ipsum mes ipsum de no ma ki a de john aaa'},
    {uuid : uuidv4(), categorie : 'computer science', description : 'lorem ipsum mes ipsum de no ma ki a de john aaa'},
    {uuid : uuidv4(), categorie : 'forest', description : 'lorem ipsum mes ipsum de no ma ki a de john aaa'},
    {uuid : uuidv4(), categorie : 'algo', description : 'lorem ipsum mes ipsum de no ma ki a de john aaa'}


]

router.get('/api/v1/themes', (req : any, res : any) => {
    // get all theme
    res.send(allCategorie);
  });
  
  // set new theme label
  router.post('/api/v1/word/newTheme', (req : any, res : any) => {
  
  });
  
  // set new theme list
  router.post('/api/v1/wordlist/', (req : any, res : any) => {
  
  });
  
  //add word to wordlist
  // uuid : ...
  // listWords
  router.post('/api/v1/wordlist/words', (req : any, res : any) => {
  
  });
  
  //delete word inside wordlist
  // list uuid
  // word to delete
  router.delete('/api/v1/wordlist/word', (req : any, res : any) => {
  
  });
  
  // remove the list
  router.delete('/api/v1/wordlist', (req : any, res : any) => {
  
  });
  
  //----------------------------------------------
  router.get('/api/v1/words', (req : any, res : any) => {
    let data = ListWord.getInfo();
    res.send(data);
  });
  
  router.get('/api/v1/word/random', (req, res) => {
    let data = ListWord.getInfo();
  
    let _rand = getRandomInt(ListWord.length);
  
    res.send(data[_rand]);
  });
  
  router.get('/api/v1/word/random/:theme', (req, res) => {
    res.send({theme : 'animal', listWord : [{ori : 'coucou'}]})
  });

  export default router;