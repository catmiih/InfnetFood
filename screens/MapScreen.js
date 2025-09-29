import React from "react";
import { Platform, View, Text, ImageBackground, StyleSheet, Pressable } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const MAP_FALLBACK_URI = "https://i.imgur.com/0Z8FQxT.jpeg"; // fallback web

export default function MapScreen({ RESTAURANTS = [], navigation }) {
  const isWeb = Platform.OS === "web";

  // Centro do Rio (aprox.) para enquadrar os pinos
  const initialRegion = {
    latitude: -22.907,       // Centro
    longitude: -43.177,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  // Garantir que lat/lon sejam números
  const pins = (RESTAURANTS || []).map(r => ({
    ...r,
    lat: typeof r.lat === "string" ? parseFloat(r.lat) : r.lat,
    lon: typeof r.lon === "string" ? parseFloat(r.lon) : r.lon,
  })).filter(r => Number.isFinite(r.lat) && Number.isFinite(r.lon));

  if (isWeb) {
    // Fallback no Web: imagem simulando o mapa
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={{ uri: MAP_FALLBACK_URI }} style={{ flex: 1 }}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Restaurantes (simulado)</Text>
            {pins.map((r) => (
              <Pressable key={r.id} style={styles.pin} onPress={() => navigation.navigate("RestaurantDetail", { id: r.id })}>
                <Text style={{ color: "#fff", fontWeight: "800" }}>🍔</Text>
              </Pressable>
            ))}
          </View>
        </ImageBackground>
      </View>
    );
  }

  // Android/iOS: mapa real
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={initialRegion}
      >
        {pins.map((r) => (
          <Marker
            key={r.id}
            coordinate={{ latitude: r.lat, longitude: r.lon }}
            title={r.name}
            description={r.address}
            onPress={() => navigation.navigate("RestaurantDetail", { id: r.id })}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, padding: 12 },
  title: {
    backgroundColor: "#111827aa",
    color: "#fff",
    padding: 8,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginBottom: 8,
    fontWeight: "700",
  },
  pin: {
    backgroundColor: "#E11D48",
    padding: 6,
    borderRadius: 50,
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
});
