var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  delete(req.session.email);
  res.render('login', { title: 'Tavant Technologies' });
});

module.exports = router;
