/**
 * Created by Jiachi on 12/14/2015.
 */
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost/mockService');
var Schema = mongoose.Schema;

var registeredCrud = {};

var service = function () {

    function _hasMatch(url) {
        return !!registeredCrud[url];
    }

    function _process(req, res, next) {
        console.log('Found Match');
        if(req.method == 'GET'){
            _read(req, res);
        } else if(req.method == 'POST'){
            _create(req, res);
        } else if(req.method == 'PUT'){
            _update(req, res);
        } else if(req.method == 'DELETE'){
            _remove(req, res);
        }
    }

    function _register(config) {
        var registeredEntity = new Schema(config.entity);
        registeredCrud[config.url] = connection.model(config.uniqueName, registeredEntity);
    }

    function _read(req, res) {
        registeredCrud[req.originalUrl].find({},function(err, list){
            if(err) throw err;
            res.json(list);
        });
    }

    function _create(req, res){
        var entity = new registeredCrud[req.originalUrl](req.body);
        entity.save(function(err){
            if(err) throw err;
            res.json(entity);
        });
    }

    function _update(req, res){
        var toUpdate = req.body;
        registeredCrud[req.originalUrl].findByIdAndUpdate(toUpdate._id, toUpdate, function(err, toUpdate){
            if(err) throw err;
            res.json(toUpdate);
        });
    }

    function _remove(req, res){
        var toRemove = req.body;
        registeredCrud[req.originalUrl].findByIdAndRemove(toRemove._id, function(err, toRemove){
            if(err) throw err;
            res.json(toRemove);
        })
    }

    return {
        register: _register,
        process: _process,
        hasMatch: _hasMatch,
        read: _read
    };
};

module.exports = service();