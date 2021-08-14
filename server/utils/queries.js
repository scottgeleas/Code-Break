import { gql } from '@apollo/client' ;

export const GET_SNIPPET = gql`
    query getSnippet($id: ID!) {
        getSnippet(_id: $id) {
            _id
            title
            description
            language
            like
            dislike
            isPublic
            code
            comments {
                _id: ID!
                author
                text
            }
        }
    }
`;