// import { makeExecutableSchema } from "@graphql-tools/schema";

import colorTypeDefs from "./color";
import helloTypeDefs from "./hello";
import rootTypeDefs from "./root";
// import resolvers from "../resolvers";

// const schema = makeExecutableSchema({
//   typeDefs: [rootTypeDefs, helloTypeDefs, colorTypeDefs],
//   resolvers: [colorResolvers, helloResolvers],
// });

// const schema = makeExecutableSchema({
//   typeDefs: [rootTypeDefs, colorTypeDefs, helloTypeDefs],
//   resolvers,
// });

const typeDefs = [rootTypeDefs, colorTypeDefs, helloTypeDefs];

export default typeDefs;
