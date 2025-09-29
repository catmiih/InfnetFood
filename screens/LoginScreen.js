import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";

export default function LoginScreen({ onLogin, themeColors }) {
  const c = themeColors;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (!email || !pass) return Alert.alert("Erro", "Preencha email e senha.");
    onLogin({ name: "Cliente Infnet", email });
  };

  return (
    <View style={[styles.container, { backgroundColor: c.bg }]}>
      <Text style={[styles.title, { color: c.text }]}>InfnetFood</Text>

      <Text style={[styles.label, { color: c.text }]}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="email@exemplo.com"
        placeholderTextColor={c.muted}
        autoCapitalize="none"
        keyboardType="email-address"
        style={[
          styles.input,
          { backgroundColor: c.surface, color: c.text, borderColor: c.cardBorder },
        ]}
        keyboardAppearance={c === undefined ? "default" : (c.bg === "#0b0b0c" ? "dark" : "light")}
      />

      <Text style={[styles.label, { color: c.text }]}>Senha</Text>
      <TextInput
        value={pass}
        onChangeText={setPass}
        placeholder="••••••••"
        placeholderTextColor={c.muted}
        secureTextEntry
        style={[
          styles.input,
          { backgroundColor: c.surface, color: c.text, borderColor: c.cardBorder },
        ]}
        keyboardAppearance={c === undefined ? "default" : (c.bg === "#0b0b0c" ? "dark" : "light")}
      />

      <Pressable style={[styles.btn, { backgroundColor: c.primary }]} onPress={handleLogin}>
        <Text style={[styles.btnTxt, { color: c.invertText }]}>Entrar</Text>
      </Pressable>

      <Text style={[styles.hint, { color: c.muted }]}>Use qualquer email/senha (mock).</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", gap: 10 },
  title: { fontSize: 28, fontWeight: "800", marginBottom: 16, textAlign: "center" },
  label: { fontWeight: "700" },
  input: {
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    marginBottom: 6,
  },
  btn: { padding: 14, borderRadius: 12, marginTop: 8, alignItems: "center" },
  btnTxt: { fontWeight: "800" },
  hint: { marginTop: 12, textAlign: "center" },
});
