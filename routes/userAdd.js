//user-add
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('userAdd', { title: 'Tavant Technologies', page:'Add User' });
});

module.exports = router;