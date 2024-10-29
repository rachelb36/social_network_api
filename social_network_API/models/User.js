const { Schema, model, mongoose } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 50, // Use camelCase for consistency
    },
    email: {
      type: String,
      required: true,
      maxLength: 50,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v); // Email regex validation
        },
        message: 'Please enter a valid email',
      },
    },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to other users
      },
    ],
    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thought', // Assuming there's a Thought model
      },
    ],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true, // Ensure virtuals are included in JSON
    },
    id: false, // Disable _id field for virtuals
  }
);

// Virtual to get the count of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length; // Return the count of friends
});

const User = model('User', userSchema); // Capitalized model name for consistency

// Create example
User.create({
  username: 'johndoe',
  email: 'john@email.com', // Fixed this part
})
  .then((result) => console.log('Created new document', result))
  .catch((err) => console.error('Error creating document', err)); // Log the error properly

module.exports = User;
