const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        password: String!
        email: String!
        snippets: [Snippet]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Snippet {
        _id: ID!
        title: String!
        description: String
        language: String!
        code: String!
        comments: [Comment]
        like: Int
        dislike: Int
        isPublic: Boolean
    }

    type Comment {
        _id: ID!
        text: String!
        author: String!
    }

    type Query {
        users: [User]
        getAllSnippets: [Snippet]
        comments: [Comment]
        getSnippet(id: ID!): Snippet
        getMe: User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        createSnippet(title: String!, description: String, language: String!, code: String!, isPublic: Boolean): Snippet
        createComment(author: String!, text: String!): Comment
    }
`;

module.exports = typeDefs;
