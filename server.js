'use strict';

const express=require('express')

require('dotenv').config();;


const cors=require('cors');

const PORT=4800

const server=express();

server.listen(PORT,()=>{
    console.log(`server is listening to ${PORT}`)
})


server.get('/', testFun)

function testFun (req,res){
res.send('hello')
}