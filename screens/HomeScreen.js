import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import CategoryCard from "../components/CategoryCard";

export default function HomeScreen({ navigation, CATEGORIES, themeColors }) {
  const colors = themeColors;
  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Categorias</Text>

      <FlatList
        testID="categories-list"
        data={CATEGORIES}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            onPress={(cat) => navigation.navigate("Products", { categoryId: cat.id, categoryName: cat.name })}
            colors={colors}
          />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
      />

      <View style={styles.quickRow}>
        {[
          ["Cart", "🛒 Carrinho"],
          ["Orders", "📦 Pedidos"],
          ["Profile", "👤 Perfil"],
          ["Map", "🗺️ Mapa"],
          ["Settings", "⚙️ Config"],
        ].map(([route, label]) => (
          <Pressable
            key={route}
            style={[styles.quickBtn, { backgroundColor: colors.surface, borderColor: colors.cardBorder }]}
            onPress={() => navigation.navigate(route)}
          >
            <Text style={{ color: colors.text }}>{label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  title:{ fontSize:22, fontWeight:"800", marginBottom:12 },
  quickRow:{ flexDirection:"row", gap:8, flexWrap:"wrap", marginTop:8 },
  quickBtn:{ paddingVertical:10, paddingHorizontal:12, borderRadius:10, borderWidth:1 },
});
