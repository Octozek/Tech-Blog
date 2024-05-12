const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = [
  {
    username: 'testuser',
    password: 'password123',
  },
];

const blogData = [
  {
    title: 'Test Blog',
    content: 'This is a test blog post.',
    user_id: 1,
  },
];

const commentData = [
  {
    content: 'This is a test comment.',
    user_id: 1,
    blogpost_id: 1,
  },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await BlogPost.bulkCreate(blogData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
