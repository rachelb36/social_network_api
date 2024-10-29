const { Schema, model, Types } = require('mongoose');

// Schema for Reaction subdocument
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        const dayjs = require('dayjs');
        return dayjs(timestamp).format('dddd, mmmm dS, yyyy, h:MM TT');
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
    _id: false,
  }
);

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => {
        const dayjs = require('dayjs');
        return dayjs(timestamp).format('dddd, mmmm dS, yyyy, h:MM TT');
      },
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    timestamps: true, // Automatically adds createdAt and updatedAt
    id: false,
  }
);

// Virtual to get the count of reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
