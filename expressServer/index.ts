import express from 'express';
import IWord from './Types/IWord';
import Word from './Entities/Word';


import RouterAuth from './Routes/Auth';
import RouterWord from './Routes/Word';

const cors = require('cors');

// rest of the code remains same

/*
donc le server va hjuste abvoir pour objectif de delivrere des truc :
-> list word en foncftion d un certain theme

*/

const app = express();
app.use(cors());

app.use(RouterAuth);
app.use(RouterWord);

const PORT = 8000;




app.get('/', (req, res) => res.send('Express + TypeScript Server'));


app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});