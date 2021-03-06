'use strict';

const express = require('express')
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 4800 ;
const server = express();

server.set('view engine', 'ejs')

server.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`)
})


server.get('/', testFun)
function testFun(req, res) {
    res.send('hello')
}


server.get('/search', searchHandler)
function searchHandler(req, res) {
    res.render('search.ejs')
}


server.get('/movies', moviesHandler) ; 

function moviesHandler(req , res ) {
    let title = req.query.t ;
    console.log(title); 

   let key = process.env.moviesKey ; 

    let url = `http://www.omdbapi.com/?t=${title}&apikey=${key}` ;

  //    console.log(key);
}


// function Movie() {


// }