import React, { useEffect, useState, createContext } from "react";
import "react-native-gesture-handler";
import { ApolloProvider } from "@apollo/client";
import { client } from "./src/apollo/client";
import auth from "@react-native-firebase/auth";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./pages/navigation/tabNavigator";
import Landing from "./pages/screens/";

interface IContext {
  user: any;
  setUser: (_: any) => void;
}

export const AuthContext = createContext<IContext>({
  user: {},
  setUser: (_: any) => {},
});

const App = () => {
  const Stack = createStackNavigator();
  const [user, setUser] = useState({});
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (userCrendential) => {
    setUser(userCrendential);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {user ? (
              <Stack.Screen name="tabNavigator" component={TabNavigator} />
            ) : (
              <Stack.Screen name="landing" component={Landing} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </AuthContext.Provider>
  );
};

export default App;
