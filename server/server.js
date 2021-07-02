const path = require('path');
//Here we still require Express in order for us to run a server 
//because ApolloServer in built on top of Express
const express = require('express');

// Here we require Database to connect to Database
const db = require('./config/connection');
// import ApolloServer
const { ApolloServer } = require('apollo-server-express');
// const routes = require('./routes');

//typeDefinitions === GraphQL Schema
// Resolvers === GraphQL API's
// So here we require that from Schemas
// imported our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

const { authMiddleware } = require('./utils/auth');

// Created our port
const PORT = process.env.PORT || 3001;

// Create our App. Our express Server
const app = express();

// Here we are calling our constructor function. 
// Our graphQL Server. The Apollo Server takes object as a parameter
// Anytime a grapgql resolver/server is hit,
// Apollo-express-server will forward that graphql request
// to /graphql endpoint
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

// Using the apollo Server, we want to apply a middleware to it and passing in our app
// It's creating an endpoint in our Server and that endpoint is /graphql
server.applyMiddleware({ app });

// Here we are using body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Once we create connection to our database. That's when we start our Express
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server now listening on localhost:${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});