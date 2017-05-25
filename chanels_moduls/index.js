
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
    }

    static isWatching(user,name){
        return channel.find({user:user, Name:name});
    }
};

