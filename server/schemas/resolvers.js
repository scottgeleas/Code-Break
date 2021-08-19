const { User, Snippet, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => User.find({}),
        getAllSnippets: async () => Snippet.find({}).populate(
            'comments'
        ),
        comments: async () => Comment.find({}),
        getSnippet: async (parent, args) => {
            const snippet = await Snippet.findById(args.id).populate(
                'comments'
            );

            if (!snippet) {
                throw new AuthenticationError(
                    'Error! Cannot retrieve snippet data.'
                );
            }

            return snippet;
        },
        getMe: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({
                    _id: context.user._id,
                });

                return user;
            }

            throw new AuthenticationError('You must log in.');
        },
    },

    Mutation: {
        createUser: async (parent, args) => {
            const user = await User.create(args);

            if (!user) {
                throw new AuthenticationError(
                    "Something is wrong! Can't create user."
                );
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
                throw new AuthenticationError(
                    'No user found with this email address.'
                );
            }

            const isCorrectPassword = await user.isCorrectPassword(
                args.password
            );

            if (!isCorrectPassword) {
                throw new AuthenticationError('Incorrect password.');
            }

            const token = signToken(user);

            return {
                token: token,
                user: user,
            };
        },
        createSnippet: async (parent, args, context) => {
            if (context.user) {
                const snippet = await Snippet.create({
                    ...args,
                    author: context.user.username,
                });

                if (!snippet) {
                    throw new AuthenticationError(
                        'Error! Cannot create snippets'
                    );
                }

                return snippet;
            }

            throw new AuthenticationError('You must log in.');
        },
        editSnippet: async (parent, args, context) => {
            if (context.user) {
                const snippet = await Snippet.findOneAndUpdate(
                    {
                        _id: args.id,
                    },
                    {
                        title: args.title,
                        description: args.description,
                        language: args.language,
                        code: args.code,
                        isPublic: args.isPublic,
                    },
                    {
                        new: true,
                    }
                );

                if (!snippet) {
                    throw new AuthenticationError(
                        'Error! Cannot update snippet.'
                    );
                }

                return snippet;
            }

            throw new AuthenticationError('You must log in.');
        },
        createComment: async (parent, args, context) => {
            if (context.user) {
                const comment = await Comment.create({
                    text: args.text,
                    author: context.user.username,
                });

                if (!comment) {
                    throw new AuthenticationError('Error! Cannot create comment.');
                }

                await Snippet.findByIdAndUpdate({
                    _id: args.snippetId,
                },
                {
                    $addToSet: {
                        comments: comment._id,
                    },
                },
                {
                    new: true,
                });

                return comment;
            }

            throw new AuthenticationError('You must log in.');
        },

        removeSnippet: async (parent, args, context) => {
            if (context.user) {
                const snippet = await Snippet.findOneAndDelete({
                    _id: args._id,
                    author: context.user.username,
                });

                if (!snippet) {
                    throw new AuthenticationError('No snippet found');
                }

                return snippet;
            }

            throw new AuthenticationError('You must log in.');
        },
    },
};

module.exports = resolvers;
