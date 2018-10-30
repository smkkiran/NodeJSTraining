
var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password : 'root',
    port : 3306, //port mysql
    database:'nodejs',
    connectionLimit: 10,
    supportBigNumbers: true
});
exports.setList = function(list){
	users=list;
}

exports.getList = function(callback){
  var sql = "SELECT * FROM customer";
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
}

exports.deleteUser = function(id, callback){
  var sql = "delete FROM customer where id="+id;
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
}
exports.getUser = function(id, callback){
  var sql = "SELECT * FROM customer where id="+id;
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
}

exports.updateUser = function(userObj, callback){
  var sql = "update customer set name='"+userObj.name+"', address='"+userObj.address+"', email= '"+userObj.email+"', phone = '"+userObj.phone+"' where id="+userObj.id;
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
}
exports.addUser = function(userObj, callback){
  var sql = `insert into customer\
  (name,address,email,phone) values \
  ('${userObj.name}','${userObj.address}','${userObj.email}',${userObj.phone})`;
  pool.getConnection(function(err, connection) {
    if(err) { console.log(err); callback(true); return; }
    // make the query
    connection.query(sql, function(err, results) {
      connection.release();
      if(err) { console.log(err); callback(true); return; }
      callback(false, results);
    });
  });
}

exports.validateSession = function(req){
  if(req.session.email){
      return true;
  }else{
      return false;
  }
}