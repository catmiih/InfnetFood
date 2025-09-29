import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RESTAURANTS as ALL } from "../data/mock";

export default function RestaurantDetailScreen({ route, themeColors }) {
  const c = themeColors;
  const { id } = route.params || {};
  const r = ALL.find((x) => x.id === id);

  if (!r) {
    return (
      <View style={[styles.center, { backgroundColor: c.bg }]}>
        <Text style={{ color: c.text }}>Restaurante não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: c.bg }]}>
      <Text style={[styles.title, { color: c.text }]}>{r.name}</Text>

      <View style={[styles.card, { backgroundColor: c.card, borderColor: c.cardBorder }]}>
        <Text style={[styles.label, { color: c.muted }]}>Endereço</Text>
        <Text style={[styles.value, { color: c.text }]}>{r.address}</Text>

        <Text style={[styles.label, { color: c.muted, marginTop: 12 }]}>Item exemplo</Text>
        <Text style={[styles.value, { color: c.text }]}>{r.sampleItem}</Text>

        <Text style={[styles.note, { color: c.muted }]}>
          (Mapa simulado; dados mockados)
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "800", marginBottom: 12 },
  card: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  label: { fontWeight: "700" },
  value: { fontSize: 16, fontWeight: "600", marginTop: 4 },
  note: { marginTop: 12, fontStyle: "italic" },
});
