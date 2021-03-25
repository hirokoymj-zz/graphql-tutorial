import gql from "graphql-tag";
import express from "express";
// import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { ApolloServer } from "apollo-server-express";
import { DateResolver, TimeResolver, DateTimeResolver } from "graphql-scalars";
import { makeExecutableSchema } from "@graphql-tools/schema";

const port = process.env.PORT || 8080;

// Define APIs using GraphQL SDL

const rootTypeDefs = `
  scalar Date
  scalar Time
  scalar DateTime

  enum AllowedColor {
    RED
    GREEN
    BLUE
    YELLOW
  }
`;

const helloTypeDefs = `
  type Query {
    sayHello(name: String!): String!
  }

  type Mutation {
    sayHello(name: String!): String!
  }
`;

const colorTypeDefs = `
  extend type Query {
    favoriteColor: AllowedColor # As a return value
    avatar(borderColor: AllowedColor): String
  }
`;

// const typeDefs = `
//   scalar Date
//   scalar Time
//   scalar DateTime

//   enum AllowedColor {
//     RED
//     GREEN
//     BLUE
//   }

//   type Query {
//     sayHello(name: String!): String!
//     favoriteColor: AllowedColor # As a return value
//     avatar(borderColor: AllowedColor): String
//   }

//   type Mutation {
//     sayHello(name: String!): String!
//   }
// `;

// Define resolvers map for API definitions in SDL
const colorResolvers = {
  Date: DateResolver,
  Time: TimeResolver,
  DateTime: DateTimeResolver,

  Query: {
    favoriteColor: () => "YELLOW",
    avatar: (root, args) => {
      console.log(args.borderColor);
      // args.borderColor is 'RED', 'GREEN', or 'BLUE'
      const { color } = args.borderColor;
      const result = `Color is ${args.borderColor}`;
      console.log(result);
      return result;
    },
  },
};

const helloResolvers = {
  Date: DateResolver,
  Time: TimeResolver,
  DateTime: DateTimeResolver,

  Query: {
    sayHello: (obj, args, context, info) => {
      return `Hello ${args.name}!`;
    },
  },

  Mutation: {
    sayHello: (obj, args, context, info) => {
      return `Hello ${args.name}!`;
    },
  },
};

const typeDefs = [rootTypeDefs, colorTypeDefs, helloTypeDefs];
const resolvers = [helloResolvers, colorResolvers];

// Configure express
const app = express();

// Build GraphQL schema based on SDL definitions and resolvers maps
const schema = makeExecutableSchema({
  typeDefs: [...typeDefs],
  resolvers: [...resolvers],
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
