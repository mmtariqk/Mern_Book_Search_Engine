// First we create a schema for our db
// Second we create a schema for our graphql API
// import the gql tagged template function
const { gql } = require('apollo-server-express');

// Below is not a regular object syntax. 
// This is String interpolation syntax in graphql that's why there is no comma after bookID: String etc.
// create our typeDefs
const typeDefs = gql`
  
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
  
    input bookInput {
        bookId: String
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInput): User
        removeBook(bookId: String!): User
    }
`;
// export the typeDefs
module.exports = typeDefs; 