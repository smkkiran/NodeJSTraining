//dataService.js
var users=[
  {id:1, name:"Vivek", email:"vivek@pyther.com", phone:"787878787878"},
  {id:2, name:"Deep", email:"deep@ibm.com", phone:"iioioio"},
  {id:3, name:"Deepa", email:"deep@ibm.com", phone:"iioioio"},
  {id:4, name:"Ajay", email:"deep@ibm.com", phone:"iioioio"},
  {id:5, name:"Vijay", email:"vijay@ibm.com", phone:"89898989"},
];

exports.setList = function(list){
	users=list;
}

exports.getList = function(){
	return users
}

exports.validateSession = function(req){
  if(req.session.email){
      return true;
  }else{
      return false;
  }
}