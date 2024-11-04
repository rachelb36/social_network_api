// Import necessary components from Mongoose and reaction schema
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Define the Thought schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1, // Use camelCase for minLength
            maxLength: 280, // Use camelCase for maxLength
        },
        createdAt: {
            type: Date,
            default: Date.now, // Set to current date
            get: formatDate, // Format date on retrieval
        },
        username: {
            type: String,
            required: true, // Username of thought creator
        },
        reactions: [reactionSchema], // Array of reactions
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false, // Disable default `id` for virtuals
    }
);

// Virtual to get the reaction count
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Helper function to format the date
function formatDate(createdAt) {
    return createdAt.toLocaleString();
}

// Create Thought model
const Thought = model('Thought', thoughtSchema);

// Export Thought model
module.exports = Thought;
