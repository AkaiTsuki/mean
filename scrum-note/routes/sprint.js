/**
 * Created by Jiachi on 11/29/2015.
 */
var express = require('express');
var router = express.Router();
var sprints = [];

router.get('/', function(req, res, next){
    res.render('sprint', { title: 'Sprint Overview' });
});

router.get('/list', function(req, res, next){
    res.json(sprints);
});

router.post('/create', function(req, res, next){
    var sprint = req.body.sprint;

    sprints.push(sprint);

    res.json(sprint);
});

module.exports = router;