import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { Text } from "./src/components/Text";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bem Vindo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
