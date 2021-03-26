const helloTypeDefs = `
  type File {
    url: String!
  }  

  type Query {
    sayHello(name: String!): String!
    hello: String!
  }

  type Mutation {
    uploadFile(file: Upload!): File!
  }
`;

export default helloTypeDefs;
