import { StatusBar } from "expo-status-bar"; //
import * as React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RoomScreen from "./Chat";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="blob?"
        onPress={() =>
          Alert.alert("BLOB", "blob 😜", [
            { text: "yes", onPress: () => Alert.alert("yes?", "thank you") },
            { text: "no", onPress: () => Alert.alert("no?!", "🖕🏻🖕🏻🖕🏻") },
          ])
        }
      />
      <Button
        title="Go to blob"
        onPress={() => navigation.navigate("page_2")}
      />
      <Button title="Go to chat" onPress={() => navigation.navigate("chat")} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>blob Screen</Text>
      <Button
        title="Go to blob... again"
        onPress={() => navigation.push("page_2")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="page_2" component={DetailsScreen} />
        <Stack.Screen name="chat" component={RoomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
