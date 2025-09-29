import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function CategoryCard({ item, onPress, colors }) {
  return (
    <Pressable
      style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
      android_ripple={{ color: colors.surfacePressed }}
      onPress={() => onPress(item)}
    >
      <Text style={[styles.emoji]}>{item.emoji}</Text>
      <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
  },
  emoji: { fontSize: 24 },
  name: { fontSize: 16, fontWeight: "600" },
});
