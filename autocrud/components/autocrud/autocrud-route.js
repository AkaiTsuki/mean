/**
 * Created by Jiachi on 12/14/2015.
 */

var express = require('express');
var router = express.Router();
var AutoCrudService = require('./autocrud-service');

router.all(/\/(.)*/, function(req, res, next){
    if(AutoCrudService.hasMatch(req.originalUrl)){
        AutoCrudService.process(req, res, next);
    } else {
        next();
    }
});

module.exports = router;