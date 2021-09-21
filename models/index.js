const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// User.hasMany(Vote, {
//     foreignKey: 'user_id'
// });
// Post.hasMany(Vote, {
//     foreignKey: 'post_id'
// });
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});



Post.belongsTo(User, {
    foreignKey: 'user_id',
});
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


//To find all posts from a user
// User.belongsToMany(Post, {
//     through: Comment,
//     as: 'commented_posts',
//     foreignKey: 'user_id'
// });
// //To find all users that commented on a post
// Post.belongsToMany(User, {
//     through: Comment,
//     as: 'commented_posts',
//     foreignKey: 'post_id'
// });

module.exports = { User, Post, Comment };