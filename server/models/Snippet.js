const { Schema, model } = require('mongoose');

const snippetSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    language: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    like: {
        type: Number,
        default: 0,
    },
    dislike: {
        type: Number,
        default: 0,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    date: {
        type: Date,
        default: Date.now(),
    },
    isPublic: {
        type: Boolean,
        default: true,
    },
});

const Snippet = model('Snippet',
    snippetSchema);

module.exports = Snippet;
