const { Post } = require("../models");

const postData = [
  {
    title: "Handlebars",
    content: "This feels like a slightly outdated way of rendering html",
    user_id: 1,
  },
  {
    title: "Blockchain or bust",
    content: "If you arent microinvesting in crypto then what are you doin?!",
    user_id: 2,
  },
  {
    title: "Bcrpyt is out",
    content: "Make way for Json Web Token",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
