import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://34.64.247.86:4000/graphql",
  cache: new InMemoryCache(),
});
