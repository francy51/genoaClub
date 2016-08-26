var mongoose = require("mongoose");

var news = new Schema ({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  creationDate:{
    type:Date,
    default:Date.now
  }
});

var News = module.exports = mongoose.model('News',news);

module.exports.getNews = function(callback,limit){
    User.find(callback).limit(limit);
}

module.exports.addNews = function(news, callback){
	Book.create(news, callback);
}
