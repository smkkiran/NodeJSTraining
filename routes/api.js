var express = require('express');
var service = require('../dataService');
var db = require('../dbService');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users', function(req, res, next) {
  console.log(">> /api/users");
  req.accepts('application/json');
  res.send(service.getList());
});

router.get('/user/:id', function(req, res, next) {
  console.log(">> /api/users");
  var requestId= parseInt(req.params.id);
  req.accepts('application/json');
  if(service.getList().length > requestId){
    res.send(service.getList()[requestId]);
  }else{
    res.send({}); //else return blank
  }
});

router.get('/userlist', function(req, res, next) {
  if(service.validateSession(req)){
    db.getList(
      function(isError, data){
          if(!isError){
            res.render('userlist', { title: 'Tavant Technologies', page:"Users Screen", data:data});
        }
      }
      );    
  }else{
    res.status(401).json({
      message: 'You are not authorized for this service.'
    });
  }
});

router.post('/login', function(req, res, next) {
  console.log(">> /api/login");
    req.accepts('application/json');
    var data=req.body;
    console.log(data);
    if(data.username =='admin' && data.password =='admin'){
      var sess = req.session;
      sess.email = data.username;
      res.send("success");
    }else{
    	 console.log("return fail");
      res.send("fail");
    }
});

router.post('/adduser', function(req, res, next) {
   req.accepts('application/json');
  if(service.validateSession(req)){
    db.addUser(req.body,
      function(isError, data){
        console.log(data);
          if(!isError){
            res.send("success");
        }
      }
      );    
  }else{
    res.status(401).json({
      message: 'You are not authorized for this service.'
    });
  }
    
});

router.get('/deleteuser/:index', function(req, res, next) {
  console.log(">> /api/deleteuser");
  var index= parseInt(req.params.index);
  db.deleteUser(index, function(err){
    if(!err){
      res.send("success");
    }else{
      res.send("fail");
    }
  })
 
});
router.get('/editUser/:id', function(req, res, next) {
  
  if(service.validateSession(req)){
    db.getUser(req.params.id,
      function(isError, data){
        console.log(data);
          if(!isError){
            res.render('editUser', { title: 'Tavant Technologies', page:"Users Screen", data:data[0]});
        }
      }
      );    
  }else{
    res.status(401).json({
      message: 'You are not authorized for this service.'
    });
  }
});
router.post('/updateUser/', function(req, res, next) {
  req.accepts('application/json');
  if(service.validateSession(req)){
    db.updateUser(req.body,
      function(isError, data){
        console.log(data);
          if(!isError){
            res.send("success");
        }
      }
      );    
  }else{
    res.status(401).json({
      message: 'You are not authorized for this service.'
    });
  }
 
});

module.exports = router;
