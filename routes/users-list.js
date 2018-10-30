var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users-list', { title: 'Welcome!', page:"home" });
});

module.exports = router;
