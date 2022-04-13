const { User } = require("../models");

const userData = [
  {
    username: "oryx",
    password: "oryx1",
  },
  {
    username: "floyd",
    password: "floyd1",
  },
  {
    username: "dalien",
    password: "dalien1",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
