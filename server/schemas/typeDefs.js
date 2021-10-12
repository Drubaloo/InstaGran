const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Post {
    _id: ID
    body: String
    img: String
  }

  type Comment {
    _id: ID
    user: String
    body: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String

  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    posts: [Post]
    comments(post: ID, body: String): [Post]
    post(_id: ID!): Post
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    addPost(postDate: String!, body: String!): Post
  }
`;

module.exports = typeDefs;
