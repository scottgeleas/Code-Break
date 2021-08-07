const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        password: String!
        snippets: [Snippet]
    }

    type Snippet {
        _id: ID!
        title: String!
        date: Date
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
        user: [User]
        snippets: [Snippet]
        comments: [Comment]
    }

    type Mustation {
        createUser
    }
`;

module.exports = typeDefs;