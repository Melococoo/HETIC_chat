/*
Imports
*/ 
// Constante pour les imports npm 
require('dotenv').config(); 
const express = require('express'); 
const path = require('path'); 
const ejs = require('ejs'); 
var bodyParser = require('body-parser'); 

/* 
Configuration 
*/ 
const server = express(); 
const port = process.env.PORT; 



/*
Démarrer 
*/ 
server.listen(port, ()=> {
    console.log(`Server is active on port ${port}`); 
}); 