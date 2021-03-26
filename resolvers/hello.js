const path = require("path");
const fs = require("fs");
import { GraphQLUpload } from "graphql-upload";

const helloResolvers = {
  Upload: GraphQLUpload,

  Query: {
    sayHello: (obj, args, context, info) => {
      console.log(args.name);
      return `Hello ${args.name}!`;
    },
    hello: () => "Hello World",
  },

  Mutation: {
    // sayHello: (obj, args, context, info) => {
    //   return `Hello ${args.name}!`;
    // },
    uploadFile: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const pathName = path.join(__dirname, `/public/images/${filename}`);
      await stream.pipe(fs.createWriteStream(pathName));

      return {
        url: `http://localhost:4000/images/${filename}`,
      };
    },
  },
};

export default helloResolvers;
