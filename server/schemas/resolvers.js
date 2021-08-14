const { User, Snippet, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => User.find({}),
        snippets: async () => Snippet.find({}),
        comments: async () => Comment.find({}),
        filterSnippets: async (parents, args) => {
            const results = await Snippet.findOne({
                language: args.language
            })
            return results
        },
        getSnippet: async (parent, args) => {
            const snippet = await Snippet.findById(args.id).populate('comment');

            if (!snippet) {
                throw new AuthenticationError('Error! Cannot retrieve snippet data.');
            }
            return snippet;
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);

            if (!user) {
                throw new AuthenticationError('Something is wrong! Can\'t create user.');
            }

            const token = signToken(user);

            return {
                token: token,
                user: user,
            };
        },
        loginUser: async (parent, args) => {
            const user = await User.findOne({
                email: args.email,
            });

            if (!user) {
                throw new AuthenticationError('No user found with this email address.');
            }

            const isCorrectPassword = await user.isCorrectPassword(args.password);

            if (!isCorrectPassword) {
                throw new AuthenticationError('Incorrect password.');
            }

            const token = signToken(user);

            return {
                token: token,
                user: user,
            };
        },
        createSnippet: async (parent, args) => {
            const snippets = await Snippet.create(args);
            if (!snippets) {
                throw new AuthenticationError('Error! Cannot create snippets');
            }
            return snippets;
        },

        createComment: async (parent, args) => {
            const comments = await Comment.create(args);
            if (!comments) {
                throw new AuthenticationError('Error! Cannot create comments');
            }
            return comments;
        },
    },
};

module.exports = resolvers;
