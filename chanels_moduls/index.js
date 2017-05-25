
const mongoose = require('mongoose'),
state_channel = require('../state_channels');
var consts = require('../consts'),
conn = mongoose.connection;
mongoose.connect(consts.MLAB_KEY);
channel = conn.model('channel', state_channel);

module.exports = class Chanel {

    static getAllChanels(){
        return channel.find();
    }

    static getChanelsOfUser(user){
        return channel.find({user:user});
        // for (var i=0; i< chanels.length; i++){
        //     if (chanels[i].user === user){
        //         return channel.find({user:user});
        //     }

        // }return {"error": "the user is not found"};

    }

    static isWatching(user,name){
        return channel.find({user:user, Name:name});
        // for (var i=0; i < chanels.length; i++){
        //     if (chanels[i].user === user){
        //         for (var j=0; j < chanels[i].chanells.length; j++){
        //             if (chanels[i].chanells[j].Name === name){
        //                 return {"yse": "the user is watching this chanel"};
        //             }
        //         }return {"no": "the user isnt watching this chanel"};
        //     }return {"error": "the user is not found"};

        // }

    }
};

