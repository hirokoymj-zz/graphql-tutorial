import { tasks, users } from "../data";
import { GraphQLUpload } from "graphql-upload";
import { v4 as uuidv4 } from "uuid";

const taskResolvers = {
  Upload: GraphQLUpload,

  Query: {
    tasks: () => {
      return tasks;
    },
  },

  Mutation: {
    createTask: (_, { input }) => {
      const task = { ...input, id: uuidv4() };
      tasks.push(task);
      return task;
    },
  },
};

export default taskResolvers;
