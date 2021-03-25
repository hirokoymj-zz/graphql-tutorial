import { DateResolver, TimeResolver, DateTimeResolver } from "graphql-scalars";

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

export default helloResolvers;
