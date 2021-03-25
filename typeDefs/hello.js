const helloTypeDefs = `
  type Query {
    sayHello(name: String!): String!
  }

  type Mutation {
    sayHello(name: String!): String!
  }
`;

export default helloTypeDefs;
