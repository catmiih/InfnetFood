import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import App from "../App";

// Teste 1: categorias aparecem
test("Exibe lista de categorias na Home após login", async () => {
  const { getByText, getByPlaceholderText, getByTestId } = render(<App />);

  // login mock
  fireEvent.changeText(getByPlaceholderText("email@exemplo.com"), "a@a.com");
  fireEvent.changeText(getByPlaceholderText("••••••••"), "123");
  fireEvent.press(getByText("Entrar"));

  await waitFor(() => getByTestId("categories-list"));
  expect(getByText("Lanches")).toBeTruthy();
  expect(getByText("Bebidas")).toBeTruthy();
  expect(getByText("Sobremesas")).toBeTruthy();
});

// Teste 2: navegação Home -> Products
test("Navega da Home para Products ao tocar na categoria", async () => {
  const { getByText, getByPlaceholderText, getByTestId, queryByText } = render(<App />);

  fireEvent.changeText(getByPlaceholderText("email@exemplo.com"), "b@b.com");
  fireEvent.changeText(getByPlaceholderText("••••••••"), "123");
  fireEvent.press(getByText("Entrar"));

  const list = await waitFor(() => getByTestId("categories-list"));
  fireEvent.press(getByText("Lanches"));
  // ProductsScreen deve mostrar o título com nome da categoria
  await waitFor(() => expect(queryByText("Lanches")).toBeTruthy());
});
