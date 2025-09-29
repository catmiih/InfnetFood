import React, { useRef } from "react";
import { View, Text, StyleSheet, Pressable, Animated } from "react-native";

export default function ProductCard({ item, onAdd }) {
  const scale = useRef(new Animated.Value(1)).current;

  const pulse = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 1.06, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
    ]).start();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <Pressable
        style={styles.btn}
        onPress={() => {
          onAdd(item);
          pulse(); // Feedback visual (Ex.12)
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700" }}>Adicionar</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  name: { fontSize: 16, fontWeight: "700" },
  desc: { color: "#6b7280", marginTop: 4, marginBottom: 8 },
  price: { fontWeight: "700" },
  btn: {
    backgroundColor: "#E11D48",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
