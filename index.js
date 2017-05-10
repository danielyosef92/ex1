'use strict';
const express = require('express'),
      app = express(),
      chanelsFunction = require('./chanels_moduls/index'),
      port = process.env.PORT || 3000,
      bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend: true}));

app.get('/getAllChanels',(req,res) => {
    res.status(200).json(chanelsFunction.getAllChanels());
});

app.post('/getChanelsOfUser',(req ,res) => {
        res.status(200).json(chanelsFunction.getChanelsOfUser(req.body.user));
});

app.post('/isWatching',(req,res) =>{
    res.json(chanelsFunction.isWatching(req.body.user, req.body.name));
});

app.all('*',(req,res) =>{
    console.log("error");
    res.send('error');
});

app.listen(port);
console.log('the server is on, listening to ${port}');