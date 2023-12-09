import { View, Text, StyleSheet } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>숫자 추측</Text>
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
    padding: 12,
  },
});
