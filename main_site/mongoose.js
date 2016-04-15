var mongoose = require ('mongoose');

var commentSchema = new mongoose.Schema ({
  comment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: false
  }
});
var commentModel = mongoose.model ('comments', commentSchema, 'comments');

module.exports = function () {
  mongoose.connect ('mongodb://localhost:27017/comments');
  mongoose.connection.once ('open', function (err) {
    console.log (err ? 'An error occured while connecting to Mongo' : 'Mongo connection successful');
  });
};
