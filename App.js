import { StatusBar } from "expo-status-bar";
import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GroceryNavigator from "./navigation/GroceryNavigator";
import ChatScreen from "./screens/ChatScreen";
import FriendsScreen from "./screens/FriendsScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RecipePage from './screens/RecipePage';
import StoreScreen from './screens/StoreScreen';
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import firebase from "@firebase/app";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import db from "./firebase";

const Stack = createStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    firebase.auth().currentUser ? true : false
  );

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      setIsSignedIn(user ? true : false);
    });
  }, []);

  return (
    <ActionSheetProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tabs" mode="modal">
            {isSignedIn ? (
              <>
                <Stack.Screen name="Tabs" component={BottomTabNavigator} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="Friends" component={FriendsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                {/* <Stack.Screen name="Grocery" component={GroceryNavigator} /> */}
                <Stack.Screen name="Store" component={StoreScreen} />
                <Stack.Screen name="Recipe" component={RecipePage} />
              </>
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Signup" component={SignupScreen} />
              </>
            )}
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </View>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
