const { Post } = require('../models');

const postdata = [
  {
    title: 'This is the title: Donec posuere metus vitae ipsum.',
    content: 'This is the content: om/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'This is the title: Morbi non quam nec dui luctus rutrum.',
    content: 'This is the content: onec.json',
    user_id: 8
  },
  {
    title: 'This is the title: Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'This is the content: parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'This is the title: Nunc purus.',
    content: 'This is the content: nim/blandit/mi.jpg',
    user_id: 4
  },
  {
    title: 'This is the title: Pellentesque eget nunc.',
    content: 'This is the content: am/nulla/integer.aspx',
    user_id: 7
  },
  {
    title: 'This is the title: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'This is the content: du/consequat.png',
    user_id: 4
  },
  {
    title: 'This is the title: In hac habitasse platea dictumst.',
    content: 'This is the content: g/non/ligula/pellentesque.js',
    user_id: 1
  },
  {
    title: 'This is the title: Morbi non quam nec dui luctus rutrum.',
    content: 'This is the content: nsequat/nulla.html',
    user_id: 1
  },
  {
    title: 'This is the title: Duis ac nibh.',
    content: 'This is the content: .com/dui/vel/nisl/duis/ac/nibh.aspx',
    user_id: 9
  },
  {
    title: 'This is the title: Curabitur at ipsum ac tellus semper interdum.',
    content: 'This is the content: on.com/ligula/sit.jpg',
    user_id: 5
  },
  {
    title: 'This is the title: In hac habitasse platea dictumst.',
    content: 'This is the content: n/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'This is the title: Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'This is the content: tions.com/nam/ultrices/libero/non/mattis/pulvinar.json',
    user_id: 10
  },
  {
    title: 'This is the title: Donec dapibus.',
    content: 'This is the content: com/ac/neque/duis/bibendum/morbi/non.xml',
    user_id: 8
  },
  {
    title: 'This is the title: Nulla tellus.',
    content: 'This is the content: natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'This is the title: Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'This is the content: orem.jpg',
    user_id: 3
  },
  {
    title: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
   content: ' This is the content: le.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'This is the title: In hac habitasse platea dictumst.',
    content: 'This is the content: urpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'This is the title: Etiam justo.',
    content: 'This is the content: .com/quis.json',
    user_id: 4
  },
  {
    title: 'This is the title: Nulla ut erat id mauris vulputate elementum.',
    content: 'This is the content: am/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'This is the title: Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'This is the content: t/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
