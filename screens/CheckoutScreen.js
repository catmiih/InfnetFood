import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { notifyOrderStatus } from "../notifications";

export default function CheckoutScreen({ navigation, cart, total, clearCart, setOrders, themeColors }) {
  const colors = themeColors;
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const submit = () => {
    if (!address || !payment) return Alert.alert("Atenção", "Preencha endereço e pagamento.");
    const code = Math.floor(Math.random() * 90000) + 10000;
    const order = { code, items: cart, total, status: "Recebido" };
    setOrders((prev) => [order, ...prev]);
    clearCart();
    notifyOrderStatus("Pedido recebido", `#${code} está sendo preparado!`);
    Alert.alert("Sucesso", `Pedido #${code} confirmado!`, [{ text: "OK", onPress: () => navigation.replace("Orders") }]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.bg }]}>
      <Text style={[styles.title, { color: colors.text }]}>Checkout</Text>
      <Text style={[styles.label, { color: colors.text }]}>Endereço de entrega *</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        placeholder="Rua, número, bairro"
        placeholderTextColor={colors.muted}
        style={[styles.input, { backgroundColor: colors.surface, color: colors.text, borderColor: colors.cardBorder }]}
      />
      <Text style={[styles.label, { color: colors.text }]}>Método de pagamento *</Text>
      <TextInput
        value={payment}
        onChangeText={setPayment}
        placeholder="Cartão, Pix, Dinheiro"
        placeholderTextColor={colors.muted}
        style={[styles.input, { backgroundColor: colors.surface, color: colors.text, borderColor: colors.cardBorder }]}
      />
      <Text style={{ marginTop:8, fontWeight:"700", color: colors.text }}>Total: R$ {total.toFixed(2)}</Text>
      <Pressable style={[styles.btn, { backgroundColor: colors.primary }]} onPress={submit}>
        <Text style={{ color: colors.invertText, fontWeight: "800" }}>Confirmar pedido</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, padding:16 },
  title:{ fontSize:20, fontWeight:"800", marginBottom:12 },
  label:{ fontWeight:"700", marginTop:8 },
  input:{ borderRadius:10, padding:12, borderWidth:1, marginTop:6 },
  btn:{ padding:14, borderRadius:12, marginTop:16, alignItems:"center" },
});
