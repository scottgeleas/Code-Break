import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation createComment($commentText: String!, $snippetId: ID!) {
        createComment(text: $commentText, snippetId: $snippetId) {
            _id
            author
            text
        }
    }
`;

export const CREATE_SNIPPET = gql`
    mutation createSnippet(
        $title: String!
        $description: String
        $language: String!
        $code: String!
        $isPublic: Boolean
    ) {
        createSnippet(
            title: $title
            description: $description
            language: $language
            code: $code
            isPublic: $isPublic
        ) {
            _id
            title
            description
            language
            code
            isPublic
        }
    }
`;

export const EDIT_SNIPPET = gql`
    mutation editSnippet(
        $id: ID!
        $title: String!
        $description: String
        $language: String!
        $code: String!
        $isPublic: Boolean
    ) {
        editSnippet(
            id: $id
            title: $title
            description: $description
            language: $language
            code: $code
            isPublic: $isPublic
        ) {
            _id
            title
            description
            language
            code
            isPublic
        }
    }
`;

export const REMOVE_SNIPPET = gql`
    mutation removeSnippet($_id: ID!) {
        removeSnippet(_id: $_id) {
            title
            author
            description
            language
            code
            like
            dislike
            isPublic
        }
    }
`;
