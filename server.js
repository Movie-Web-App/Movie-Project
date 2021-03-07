'use strict';

const express=require('express')

require('dotenv').config();;


const cors=require('cors');

const PORT=4800

const server=express();

const superagent=require('superagent')

server.set('view engine', 'ejs')

server.listen(PORT,()=>{
    console.log(`server is listening to ${PORT}`)
})


server.get('/', testFun)

function testFun (req,res){
res.send('hello')
}

// server.get('/search',searchHandler)

// function searchHandler(req,res){
//     res.render('pages/search.ejs')
// }


server.get('/movies',searchHandler)
function searchHandler(req,res){
let key=process.env.SEARCH_KEY
let title=req.query.title
let URL=`https://imdb-api.com/en/API/SearchMovie/k_ksrwxn1u/${title}`
superagent.get(URL)
.then(results=>{
    let movies=results.body.results
  let searchedMov=movies.map(movie=>{
  return new Search(movie)
  

  })
  res.render('pages/search',{movies:searchedMov})
})
}

function Search(data){
this.id=data.id
this.image=data.image
this.title=data.title
this.description=data.description

}