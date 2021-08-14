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
        author(username: String!): [User] 
        text: String!
    }

    type Query {
        users: [User]
        snippets: [Snippet]
        comments: [Comment]
        filterSnippets(language: String!): Snippet
        getSnippet(id: ID!): Snippet
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        loginUser(email: String!, password: String!): Auth
        createSnippet: Snippet
        createComment: Comment
    }
`;

module.exports = typeDefs;
