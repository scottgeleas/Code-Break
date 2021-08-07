// const { AuthenticationError } = require('apollo-server-express');
const { User, Snippet, Comment } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => User.find({}),
        // snippets: async () => {

        // },
        // comments: async () => {

    // },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
        },
    // createSnippet:
    // createComment:
    },
};

module.exports = resolvers;
