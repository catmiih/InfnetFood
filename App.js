// App.js
import React, { useMemo, useState, useCallback } from "react";
import { Platform, LogBox } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Notifications from "expo-notifications";

import { getColors } from "./theme";
import { CATEGORIES, PRODUCTS_BY_CATEGORY, RESTAURANTS } from "./data/mock";
import { requestAndConfigureNotifications } from "./notifications";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrdersScreen from "./screens/OrdersScreen";
import MapScreen from "./screens/MapScreen";
import RestaurantDetailScreen from "./screens/RestaurantDetailScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import SettingsScreen from "./screens/SettingsScreen";

LogBox.ignoreLogs(["Sending `onAnimatedValueUpdate`"]);
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({ name: "Usuário Infnet", email: "user@infnet.com" });
  const [themeMode, setThemeMode] = useState("dark"); // já começa no dark pra você ver
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  React.useEffect(() => {
    requestAndConfigureNotifications();
    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }
  }, []);

  const addToCart = useCallback((product) => {
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === product.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = { ...next[idx], qty: next[idx].qty + 1 };
        return next;
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => setCart((prev) => prev.filter((i) => i.id !== id)), []);
  const changeQty = useCallback((id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );
  }, []);
  const clearCart = useCallback(() => setCart([]), []);
  const total = useMemo(() => cart.reduce((s, i) => s + i.qty * i.price, 0), [cart]);

  const navTheme = themeMode === "dark" ? DarkTheme : DefaultTheme;
  const themeColors = getColors(themeMode);

  const screenProps = {
    user,
    CATEGORIES,
    PRODUCTS_BY_CATEGORY,
    RESTAURANTS,
    cart,
    addToCart,
    removeFromCart,
    changeQty,
    clearCart,
    total,
    orders,
    setOrders,
    themeMode,
    setThemeMode,
    themeColors, // <<< passa paleta
  };

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style={themeMode === "dark" ? "light" : "dark"} />
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {!isLogged ? (
          <Stack.Screen name="Login" options={{ title: "InfnetFood - Login" }}>
            {(props) => (
              <LoginScreen
                {...props}
                onLogin={(mockUser) => {
                  setUser(mockUser);
                  setIsLogged(true);
                }}
                themeColors={themeColors}
              />
            )}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Home" options={{ title: "InfnetFood" }}>
              {(props) => <HomeScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Products" options={{ title: "Produtos" }}>
              {(props) => <ProductsScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Cart" options={{ title: "Carrinho" }}>
              {(props) => <CartScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Profile" options={{ title: "Perfil" }}>
              {(props) => <ProfileScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Orders" options={{ title: "Meus Pedidos" }}>
              {(props) => <OrdersScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Map" options={{ title: "Mapa (Simulado)" }}>
              {(props) => <MapScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="RestaurantDetail" options={{ title: "Restaurante" }}>
              {(props) => <RestaurantDetailScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Checkout" options={{ title: "Checkout" }}>
              {(props) => <CheckoutScreen {...props} {...screenProps} />}
            </Stack.Screen>
            <Stack.Screen name="Settings" options={{ title: "Configurações" }}>
              {(props) => <SettingsScreen {...props} {...screenProps} />}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
