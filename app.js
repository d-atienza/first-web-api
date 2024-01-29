const express = require('express');
const { Pool } = require("pg");


const app = express();

app.listen(3000);

app.get('/', (req, res) => {
    res.send(diceRoll(dice));
  });
  
  app.get('/about', (req, res) => {
    res.send(diceRoll(dice));
  });
  

let dice = [1, 2, 3, 4, 5, 6]

function diceRoll(arr){
    const index = Math.floor(Math.random() * arr.length);
    return 'this is your current roll: ' + arr[index];
  }