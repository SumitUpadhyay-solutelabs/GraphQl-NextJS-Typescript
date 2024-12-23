import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";

const users = [
  { id: "1", name: "John Doe", age: 30, isMarried: true },
  { id: "2", name: "Jane Smith", age: 25, isMarried: false },
  { id: "3", name: "Alice Johnson", age: 28, isMarried: false },
];
const typeDefs = `
type Query {    
  getUsers: [User]
  getUserById(id: ID!): User
}

type Mutation {
  createUser(name: String!, age: Int, isMarried: Boolean): User
}
type User {
    id: ID,
    name: String,
    age: Int,
    isMarried: Boolean,
}
`;
const resolvers = {
  Query: {
    getUsers: () => {
      return users;
    },
    getUserById: (parent: any, args: { id: string }) => {
      const id = args.id;
      return users.find((user) => user.id === id);
    },
  },
  Mutation: {
    createUser: (
      parent: any,
      args: { id: number; name: string; age: number; isMarried: boolean }
    ) => {
      const { name, age, isMarried } = args;
      const newUser = {
        id: (users.length + 1).toString(),
        name,
        age,
        isMarried,
      };
      users.push(newUser);
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// const { url } = await startStandaloneServer(server, {
//   listen: { port: 4000 },
// });
// export default async function graphql() {
//   await startStandaloneServer(server, {
//     listen: { port: 5000 },
//   });
// }
//console.log(`Server Running at: ${url}`);
//@ts-ignore
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req) => ({ req }),
});

export { handler as GET, handler as POST };
