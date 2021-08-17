import { gql } from '@apollo/client';

export const GET_ALL_SNIPPETS = gql`
    query getAllSnippets {
        getAllSnippets {
            _id
            title
            description
            language
            like
            dislike
            isPublic
        }
    }
`;
export const GET_SNIPPET = gql`
    query getSnippet($id: ID!) {
        getSnippet(id: $id) {
            _id
            title
            description
            language
            like
            dislike
            isPublic
            code
            comments {
                _id
                author
                text
            }
        }
    }
`;

export const GET_ME = gql`
    query getMe {
        getMe {
            _id
            username
            email
        }
    }
    `

