var express = require('express');
var router = express.Router();

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/comments', function(req, res, next){
  res.json(data);
});

router.post('/api/comments', function(req, res, next){
  var newComment = req.body;
  newComment['id'] = data.length+1;
  data.push(newComment);
  res.json(data);
});

module.exports = router;
