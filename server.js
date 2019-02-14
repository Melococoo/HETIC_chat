/*
Imports
*/ 
// Constante pour les imports npm 
const express = require('express'); 
const path = require('path'); 
const ejs = require('ejs'); 
var bodyParser = require('body-parser'); 
const result = dotenv.config(); 

if (result.error) {
  throw result.error
}

console.log(result.parsed)

/* 
Configuration 
*/ 
const server = express(); 
const port = 9876; 



/*
Démarrer 
*/ 
