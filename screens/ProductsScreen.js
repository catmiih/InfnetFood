import React from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import ProductCard from "../components/ProductCard";

export default function ProductsScreen({ route, navigation, PRODUCTS_BY_CATEGORY, addToCart, themeColors }) {
  const colors = themeColors;
  const { categoryId, categoryName } = route.params || {};
  const items = PRODUCTS_BY_CATEGORY[categoryId] || [];

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>{categoryName}</Text>
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => <ProductCard item={item} onAdd={(p) => addToCart(p)} colors={colors} />}
      />
      <Pressable style={[styles.cartBtn, { backgroundColor: colors.text }]} onPress={() => navigation.navigate("Cart")}>
        <Text style={{ color: colors.invertText, fontWeight: "800" }}>Ir ao carrinho</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  title:{ fontSize:20, fontWeight:"800", marginBottom:12 },
  cartBtn:{ position:"absolute", bottom:16, left:16, right:16, padding:14, borderRadius:12, alignItems:"center" },
});
