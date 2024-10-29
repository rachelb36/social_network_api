const mongoose = require('mongoose');
const users = [
  {
    _id: mongoose.Types.ObjectId('5eddff358a0fcb779aa7b118b'), // Cast to ObjectId
    username: 'lernantino',
    email: 'lernantino@gmail.com',
    thoughts: [mongoose.Types.ObjectId('5edff3a9a0fcb779aa7b118d')],
    friends: [mongoose.Types.ObjectId('5edff367a0fcb779aa7b118c')],
    friendCount: 1,
    __v: 0,
  },
  // more users...
];

const thoughts = [
  {
    _id: mongoose.Types.ObjectId('5edff3a9a0fcb779aa7b118d'),
    thoughtText: 'Here’s a cool thought…',
    username: 'lernantino',
    createdAt: 'June 9th, 2020 at 4:40pm',
    reactions: [
      {
        reactionId: mongoose.Types.ObjectId('5edff3dca0f3dca0fcb779aa7b118f'),
        createdAt: 'Jun 9th, 2020 at 04:41pm',
        _id: mongoose.Types.ObjectId('5edff3dca0fcb799aab118e'),
        reactionBody: 'Cool thought, Lernantino!',
        username: 'Amiko',
      },
    ],
    reactionCount: 1,
    __v: 0,
  },
];

module.exports = { users, thoughts };
