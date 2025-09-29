import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function SettingsScreen({ themeMode, setThemeMode, themeColors }) {
  const colors = themeColors;
  const toggle = () => setThemeMode(themeMode === "light" ? "dark" : "light");
  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Configurações</Text>
      <Text style={{ marginBottom:10, color: colors.text }}>
        Tema atual: <Text style={{ fontWeight:"800" }}>{themeMode}</Text>
      </Text>
      <Pressable style={[styles.btn, { backgroundColor: colors.primary }]} onPress={toggle}>
        <Text style={{ color: colors.invertText, fontWeight:"800" }}>Alternar tema</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  title:{ fontSize:20, fontWeight:"800", marginBottom:12 },
  btn:{ padding:14, borderRadius:12, alignItems:"center", marginTop:6 },
});
