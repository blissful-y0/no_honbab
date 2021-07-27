import React from "react";
import "react-native-gesture-handler";
import NavigationPage from "./pages/navigation";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo/client";

const App = () => (
  <ApolloProvider client={client}>
    <NavigationPage />
  </ApolloProvider>
);

export default App;
