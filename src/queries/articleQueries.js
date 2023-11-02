import {gql} from '@apollo/client';

export const GET_CONTENTS = gql`
  query GetContents(
    $project_id: String!
    $lang: String!
    $skip: Int
    $take: Int
  ) {
    contents(project_id: $project_id, lang: $lang, skip: $skip, take: $take) {
      id
      title {
        short
      }
      description {
        intro
      }
      dates {
        posted
      }
      thumbnail
      parents {
        id
        type
        attachment
        __typename
      }
    }
  }
`;

export const GET_CONTENT = gql`
  query GetContent($project_id: String!, $id: String!, $full_url: String!) {
    content(project_id: $project_id, id: $id, full_url: $full_url) {
      id
      title {
        short
      }
      description {
        intro
        thumbnail
      }
      dates {
        posted
      }
      thumbnail
      __typename
    }
  }
`;
