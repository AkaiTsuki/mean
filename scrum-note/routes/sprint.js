/**
 * Created by Jiachi on 11/29/2015.
 */
var express = require('express');
var router = express.Router();
var sprintService = require('../services/sprint-service');

router.get('/', function(req, res, next){
    res.render('sprint', { title: 'Sprint Overview' });
});

router.get('/list', function(req, res, next){
    sprintService.listSprints(function(sprints){
        res.json(sprints);
    });
});

router.post('/create', function(req, res, next){
    var sprint = req.body.sprint;
    sprintService.saveSprint(sprint, function(savedSprint){
        res.json(savedSprint);
    });
});

module.exports = router;