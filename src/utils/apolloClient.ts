import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://your-graphql-api-endpoint.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
