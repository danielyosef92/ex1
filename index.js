'use strict';
const express = require('express'),
      app = express(),
      chanelsFunction = require('./chanels_moduls/index'),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get('/getAllChanels',(req,res) => {
    chanelsFunction.getAllChanels().then(
        (channel)=>{
            if(channel.length == false)
                console.log("error")
            else
                res.json(channel);
        }, (error)=>{
            console.log(error);
        });
});

app.post('/getChanelsOfUser',(req ,res) => {
    var user = req.body.user;
    chanelsFunction.getChanelsOfUser(user).then(
        (channel)=>{
            if(channel.length == false)
                console.log("error")
            else
                res.json(channel);
        }, (error)=>{
            console.log(error);
        });
});

app.post('/isWatching',(req,res) =>{
     var user = req.body.user,
     name = req.body.name;
    chanelsFunction.getChanelsOfUser(user).then(
        (channel)=>{
            if(channel.length == false)
                console.log("error")
            else
                res.json(channel);
        }, (error)=>{
            console.log(error);
        });
});

app.all('*',(req,res) =>{
    console.log("error");
    res.send('error');
});

app.listen(port);
console.log('the server is on, listening to ${port}');