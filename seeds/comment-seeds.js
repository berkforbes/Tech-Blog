const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "I totally agree!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I'm at least 12 iq points smarter now",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "I love what you have to say here",
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
