import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query users {
    users {
      id,
      name
    }
  }
`;

export const GET_USER = gql`
  query user($id : Int!){
      user(id: $id){
          name,
          email,
          role
      }
  }
`;