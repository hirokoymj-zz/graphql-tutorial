import gql from "graphql-tag";
import express from "express";
// import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "@graphql-tools/schema";

import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const port = process.env.PORT || 8080;

// Define APIs using GraphQL SDL

// Configure express
const app = express();

// Build GraphQL schema based on SDL definitions and resolvers maps
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Build Apollo server
const apolloServer = new ApolloServer({ schema });
apolloServer.applyMiddleware({ app });

// Run server
app.listen({ port }, () => {
  console.log(
    `🚀Server ready at http://localhost:${port}${apolloServer.graphqlPath}`
  );
});
