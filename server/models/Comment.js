const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
    user: {
      type: String,
      required: true,
      trim: true
    },
    body: {
      type: String,
      required: true,
      trim: true
    }
  });
  
  const Comment = mongoose.model('Comment', commentSchema);
  
  module.exports = Comment;