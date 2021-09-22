const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'This is content!',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'This is content!',
    user_id: 8
  },
  {
    title: 'Donec diam nequputate ut, ultrices vel, augue.',
    content: 'This is content!',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'This is content!',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'This is content!',
    user_id: 7
  },
  {
    title: 'Lorem ipsum doltuer adipiscing elit.',
    content: 'This is content!',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'This is content!',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'This is content!',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'This is content!',
    user_id: 9
  },
  {
    title: 'Curabitur atmper interdum.',
    content: 'This is content!',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'This is content!',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum euin, leo.',
    content: 'This is content!',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'This is content!',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'This is content!',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdi, justo.',
    content: 'This is content!',
    user_id: 3
  },
  {
    title: 'This is Title!',
    content: 'This is content!',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'This is content!',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'This is content!',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris v.',
    content: 'This is content!',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia e',
    content: 'This is content!',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
