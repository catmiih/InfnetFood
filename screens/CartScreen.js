import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import CartItem from "../components/CartItem";

export default function CartScreen({ navigation, cart, changeQty, total, themeColors }) {
  const colors = themeColors;
  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Seu carrinho</Text>

      <FlatList
        data={cart}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <CartItem item={item} onQty={changeQty} colors={colors} />}
        ListEmptyComponent={<Text style={{ color: colors.muted }}>Carrinho vazio.</Text>}
        contentContainerStyle={{ paddingBottom: 100 }}
      />

      <View style={[styles.footer, { backgroundColor: colors.card, borderColor: colors.cardBorder, borderWidth: 1 }]}>
        <Text style={[styles.total, { color: colors.text }]}>Total: R$ {total.toFixed(2)}</Text>
        <Pressable style={[styles.btn, { backgroundColor: colors.primary }]} onPress={() => navigation.navigate("Checkout")}>
          <Text style={{ color: colors.invertText, fontWeight: "800" }}>Finalizar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  title:{ fontSize:20, fontWeight:"800", marginBottom:12 },
  footer:{ position:"absolute", bottom:16, left:16, right:16, padding:14, borderRadius:12, flexDirection:"row", justifyContent:"space-between", alignItems:"center" },
  total:{ fontWeight:"800" },
  btn:{ paddingVertical:10, paddingHorizontal:16, borderRadius:10 },
});
