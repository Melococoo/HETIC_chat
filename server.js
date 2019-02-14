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

class ServerClass{
    init(){
        server.set( 'views', __dirname + '/www' );
        server.use( express.static(path.join(__dirname, 'www')) );

        server.set( 'view engine', 'ejs' );

        this.launch(); 
    }

    launch() {
        server.listen(port, () => {
            console.log(`Server is active on port ${port}`); 
        }); 
    }
}

/*
Démarrer 
*/ 
new ServerClass.launch(); 