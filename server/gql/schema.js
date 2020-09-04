const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String,
    users: [User],
    user(id: Int): User
  }

  type Mutation {
    newUser(name: String!, email: String!, role: String!): User
  }
  
  type User {
      id: Int,
      name: String!
      email: String!
      role: String!
  }
`);

module.exports = {
    schema
}