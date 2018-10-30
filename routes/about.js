var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('aboutus', { title: 'Tavant Technologies', page:"About Screen"});
});

module.exports = router;
