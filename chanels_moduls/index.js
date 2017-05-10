
const chanels = require('./data/chanel.json');
module.exports = class Chanel {

    static getAllChanels(){
        return chanels;
    }

    static getChanelsOfUser(user){
        for (var i=0; i< chanels.length; i++){
            if (chanels[i].user === user){
                return chanels[i].chanells;
            }

        }return {"error": "the user is not found"};

    }

    static isWatching(user,name){
        for (var i=0; i < chanels.length; i++){
            if (chanels[i].user === user){
                for (var j=0; j < chanels[i].chanells.length; j++){
                    if (chanels[i].chanells[j].Name === name){
                        return {"yse": "the user is watching this chanel"};
                    }
                }return {"no": "the user isnt watching this chanel"};
            }return {"error": "the user is not found"};

        }

    }
};

