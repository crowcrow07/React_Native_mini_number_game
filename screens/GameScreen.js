import { View, Text, StyleSheet } from "react-native";

import Title from "../components/Title";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>숫자 추측</Title>
      <View>
        <Text>위 아래</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
