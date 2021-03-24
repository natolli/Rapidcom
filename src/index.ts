import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";

const main = async () => {
  const schema = await buildSchema({
    resolvers: [__dirname + "/modules/**/*.js"],
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    playground: true,
  });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(process.env.PORT || 5000, () => {
    console.log("server started");
  });
};

main();
