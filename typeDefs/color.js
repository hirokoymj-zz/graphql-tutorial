const colorTypeDefs = `
  extend type Query {
    favoriteColor: AllowedColor # As a return value
    avatar(borderColor: AllowedColor): String
  }
`;

export default colorTypeDefs;
