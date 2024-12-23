"use client";
import { GraphqlWrapper } from "@/components/GraphqlWrapper";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function graphql() {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <GraphqlWrapper />
      </ApolloProvider>
    </>
  );
}
