//user-add
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('editUser', { title: 'Tavant Technologies', page:'Edit User' });
});

module.exports = router;