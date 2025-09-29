import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CartItem({ item, onQty, colors }) {
  return (
    <View style={[styles.row, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
      <View style={{ flex: 1 }}>
        <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
        <Text style={[styles.sub, { color: colors.muted }]}>
          R$ {item.price.toFixed(2)} x {item.qty}
        </Text>
      </View>
      <View style={styles.controls}>
        <Pressable style={[styles.smallBtn, { backgroundColor: colors.surface }]} onPress={() => onQty(item.id, -1)}>
          <Text style={{ color: colors.text }}>-</Text>
        </Pressable>
        <Text style={{ width: 24, textAlign: "center", color: colors.text }}>{item.qty}</Text>
        <Pressable style={[styles.smallBtn, { backgroundColor: colors.surface }]} onPress={() => onQty(item.id, +1)}>
          <Text style={{ color: colors.text }}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderWidth: 1,
  },
  name: { fontWeight: "700" },
  sub: { marginTop: 4 },
  controls: { flexDirection: "row", alignItems: "center", gap: 8 },
  smallBtn: { paddingHorizontal: 8, paddingVertical: 6, borderRadius: 6 },
});
