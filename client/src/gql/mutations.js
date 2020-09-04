import { gql } from '@apollo/client';

export const NEW_USER = gql`
    mutation newUser($name: String!, $email: String!, $role: String!){
        newUser(name: $name, email: $email, role: $role){
            id,
            name,
            email,
            role
        }
    }
`;