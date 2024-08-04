import { StyleSheet, Text, Pressable, View } from "react-native";

export default function Button({ label }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed on a button.")}
      >
        <Text></Text>
      </Pressable>
    </View>
  );
}
