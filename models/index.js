const User = require("./User");
const Category = require("./Category");
const Post = require("./Post");

module.exports = { User, Category, Post};

//Associations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });

  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

  Post.belongsTo(Category, {
    foreignKey: 'category_id',
  });
