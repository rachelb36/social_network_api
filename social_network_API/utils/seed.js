const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { users, thoughts } = require('./data'); // Import the data from data.js

connection.on('error', (err) => console.error('Connection error:', err));

connection.once('open', async () => {
  console.log('connected to the database');

  try {
    // Clear the collections before inserting new data
    await Thought.deleteMany({});
    await User.deleteMany({});
    console.log('Existing data cleared from thoughts and users collections');

    // Insert the users and thoughts into the database
    const insertedUsers = await User.insertMany(users);
    const insertedThoughts = await Thought.insertMany(thoughts);

    console.log(`${insertedUsers.length} users inserted`);
    console.log(`${insertedThoughts.length} thoughts inserted`);

    console.table(insertedUsers);
    console.table(insertedThoughts);

    console.info('Seeding complete! 🌱');
    process.exit(0);
  } catch (err) {
    console.error('Error during seeding:', err);
    process.exit(1);
  }
});
