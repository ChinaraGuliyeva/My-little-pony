const express=require('express');
const app=express();
const ponies=require('./ponies.json');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/ponies', (req, res) => {
    res.json(ponies);
});

app.listen(3001, ()=> {console.log("Работает сервер")});