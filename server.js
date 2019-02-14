/*
Imports
*/ 

//Node.js 
// Constante pour les imports npm 
require('dotenv').config(); 
const express = require('express'); 
const path = require('path'); 
const ejs = require('ejs'); 
var bodyParser = require('body-parser'); 

//Inner 
const mainRouter = require('./routes/main_router.js'); 
/* 
Configuration 
*/ 
const server = express(); 
const port = process.env.PORT; 

class ServerClass{
    init(){
        //Config du dossier client
        server.set( 'views', __dirname + '/www' );
        server.use( express.static(path.join(__dirname, 'www')) );

        //Config du moteur de rendu 
        server.set( 'view engine', 'ejs' );

        //Config les routes
        server.use('/', mainRouter); 

        //Lancer le serveur
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
new ServerClass().init()