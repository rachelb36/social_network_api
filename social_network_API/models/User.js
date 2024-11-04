const { Schema, model } = require('mongoose');

// Define User schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      maxLength: 50, // Limit username length
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-zA-Z0-9_\.-]+)@([a-zA-Z\.-]+)\.([a-zA-Z\.]{2,6})$/, 'Please enter a valid email address'], // Email format validation
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', // References Thought model
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', // References User model for friend connections
      },
    ],
  },
  {
    toJSON: {
      virtuals: true, // Include virtuals in JSON output
    },
    id: false, // Disable default `id` field
  }
);

// Virtual to get the friend count
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create User model
const User = model('User', userSchema);

// Export User model
module.exports = User;
