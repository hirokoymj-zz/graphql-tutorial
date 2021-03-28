const helloTypeDefs = `
  type File {
    url: String!
  }  

  type Query {
    hello: String!
  }

  type Mutation {
    sayHello(name: String!): String!
    uploadFile(file: Upload!): File!
  }
`;

export default helloTypeDefs;
