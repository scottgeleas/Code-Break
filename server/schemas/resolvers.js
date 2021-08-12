// const { AuthenticationError } = require('apollo-server-express');
const { User, Snippet, Comment } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => User.find({}),
        snippets: async () => Snippet.find({}),
        comments: async () => Comment.find({}),
    },

    Mutation: {
        createUser: async (parent, args) => {
            const users = await User.create(args);
            return users;
        },
        createSnippet: async (parent, args) => {
            const snippets = await Snippet.create(args);
            return snippets;
        },
        createComment: async (parent, args) => {
            const comments = await Comment.create(args);
            return comments;
        },
    },
};

module.exports = resolvers;
