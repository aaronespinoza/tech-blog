const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
})

Comment.belongsTo(User, {
  foreignKey: 'username',
  onDelete: 'CASCADE'
})

module.exports = { User, Post, Comment };
