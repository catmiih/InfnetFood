import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function OrdersScreen({ orders, themeColors }) {
  const colors = themeColors;
  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Pedidos</Text>
      <FlatList
        data={orders}
        keyExtractor={(i, idx) => String(idx)}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Text style={[styles.row, { color: colors.text }]}>#{item.code} • {item.status}</Text>
            <Text style={{ color: colors.muted }}>Itens: {item.items.map(i=>`${i.name} x${i.qty}`).join(", ")}</Text>
            <Text style={{ fontWeight:"700", marginTop:6, color: colors.text }}>Total: R$ {item.total.toFixed(2)}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ color: colors.muted }}>Nenhum pedido ainda.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  title:{ fontSize:20, fontWeight:"800", marginBottom:12 },
  card:{ borderRadius:12, padding:16, marginBottom:12, borderWidth:1 },
  row:{ fontWeight:"700", marginBottom:4 },
});
