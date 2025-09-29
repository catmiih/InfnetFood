import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen({ user, themeColors }) {
  const colors = themeColors;
  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Perfil</Text>
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
        <Text style={[styles.label, { color: colors.muted }]}>Nome</Text>
        <Text style={[styles.value, { color: colors.text }]}>{user?.name}</Text>
        <Text style={[styles.label, { color: colors.muted, marginTop:8 }]}>E-mail</Text>
        <Text style={[styles.value, { color: colors.text }]}>{user?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  title:{ fontSize:20, fontWeight:"800", marginBottom:12 },
  card:{ borderRadius:12, padding:16, gap:6, borderWidth:1 },
  label:{ fontWeight:"700" },
  value:{ fontSize:16, fontWeight:"600" },
});
