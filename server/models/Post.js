const mongoose = require('mongoose');

const { Schema } = mongoose;
const Comment = require('./Comment');

const postSchema = new Schema({
  postDate: {
    type: Date,
    default: Date.now,
  },
  body: {
      type: String,
      required: true,
      trim: true,
  },
  img: {
      data: Buffer,
      contentType: String,
  },
  comments: [Comment.schema]

});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
