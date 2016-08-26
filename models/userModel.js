var mongoose = require('mongoose');
Schema = mongoose.Schema;

var user = new Schema ({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  creationDate:{
    type:Date,
    default:Date.now
  }
});

var User = module.exports = mongoose.model('User',user);

module.exports.getUsers = function(callback,limit){
    User.find(callback).limit(limit);
}

module.exports.addUser = function(user, callback){
	Book.create(user, callback);
}
