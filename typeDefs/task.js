const taskDefs = `
  extend type Query {
    tasks: [Task!]
  }

  extend type Mutation {
    createTask(input: createTaskInput!): Task
  }
  
  input createTaskInput{
    name: String!
    completed: Boolean!
  }

  type Task {
    id: ID!
    name: String!
    completed: Boolean!
  }
`;

export default taskDefs;
