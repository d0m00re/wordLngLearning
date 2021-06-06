import express from 'express';

const router = express.Router();

import Global from './../Entities/Global';

import getRandomInt from './../Utils/getRandomInt';

declare const global: Global;

declare var __APP__DATA__: Global;

router.get('/api/v1/theme/word/random/:themeLabel', (req : any, res : any) => {
  let tabListWords: Global = req.app.get('tabListWords');

  let theme = tabListWords.getThemeWithLabel(req.params.themeLabel);
  if (theme === undefined) {
    res.send({err : true})
  }
  else { 
    let randId2 = getRandomInt(theme.wordList.length);
    let data = theme.wordList[randId2];
    res.send({err : false, ...data})
  }

});

router.get('/api/v1/word/random', (req : any, res : any) => {
  let tabListWords: Global = req.app.get('tabListWords');

  let randId = getRandomInt(tabListWords.tabWordList.length);
  let randId2 = getRandomInt(tabListWords.tabWordList[randId].wordList.length);

  res.send(tabListWords.tabWordList[randId].wordList[randId2]);
  });

// get theme : all theme
router.route('/api/v1/theme/:uuid')
  .get((req: any, res: any) => {
    let tabListWords: Global = req.app.get('tabListWords');

    let findId = tabListWords.tabWordList.findIndex(_e => _e.uuid === req.params.uuid)

    if (findId === -1)
      res.send({ err: true, msg: 'content not found' });
    let payload = tabListWords.tabWordList[findId].getInfoTheme();
    res.send({ err: false, ...payload })
  })
  

router.route('/api/v1/theme')
  .get((req: any, res: any) => {
    let tabListWords: Global = req.app.get('tabListWords');
    res.send(tabListWords.getAllTheme());
  })
  .post((req: any, res: any) => {
    let uuid = req.body.uuid;

    console.log('uuid : ' + uuid);
    res.send({uuid : uuid})
  })
  .delete((req: any, res: any) => {
    let uuid = req.body.uuid;

    console.log('uuid : ' + uuid);
    res.send({uuid : uuid})
  })
/*
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
//  let data = ListWord.getInfo();
  res.send(data);
});
 
router.get('/api/v1/word/random', (req, res) => {
//  let data = ListWord.getInfo();
 
//  let _rand = getRandomInt(ListWord.length);
 
//  res.send(data[_rand]);
});
 
router.get('/api/v1/word/random/:theme', (req, res) => {
  res.send({theme : 'animal', listWord : [{ori : 'coucou'}]})
});
*/
export default router;