import { gql } from '@apollo/client';

export const QUERY_FILTER_SNIPPETS = gql`
    query filterSnippets($filterSnippets: String!) {
        filterSnippets(language: $filterSnippets) {
            language
        }
    }
`;
