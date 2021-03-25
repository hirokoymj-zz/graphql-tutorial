import { DateResolver, TimeResolver, DateTimeResolver } from "graphql-scalars";
import { GraphQLUpload } from "graphql-upload";

const colorResolvers = {
  Date: DateResolver,
  Time: TimeResolver,
  DateTime: DateTimeResolver,
  Upload: GraphQLUpload,
  AllowedColor: {
    RED: "#f00",
    GREEN: "#0f0",
    BLUE: "#00f",
  },

  Query: {
    favoriteColor: () => "#f00",
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

export default colorResolvers;
