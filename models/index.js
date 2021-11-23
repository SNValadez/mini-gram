const User = require('./User');
const Post = require('./Post');
const Category = require('./Catgory');

// associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

Category.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'cascade'
});

module.exports = { User, Post, Category};