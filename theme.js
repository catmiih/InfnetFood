// theme.js
export const lightColors = {
  bg: "#ffffff",
  text: "#0f172a",
  card: "#f3f4f6",
  cardBorder: "#e5e7eb",
  primary: "#E11D48",
  muted: "#6b7280",
  surface: "#ffffff",
  surfacePressed: "#e5e7eb",
  invertText: "#ffffff",
};

export const darkColors = {
  bg: "#0b0b0c",
  text: "#e5e7eb",
  card: "#1a1a1e",
  cardBorder: "#26262b",
  primary: "#fb7185",
  muted: "#9ca3af",
  surface: "#101014",
  surfacePressed: "#1f1f23",
  invertText: "#0b0b0c",
};

export function getColors(mode = "light") {
  return mode === "dark" ? darkColors : lightColors;
}
