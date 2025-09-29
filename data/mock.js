export const CATEGORIES = [
  { id: "lanche", name: "Lanches", emoji: "🍔" },
  { id: "bebida", name: "Bebidas", emoji: "🥤" },
  { id: "sobremesa", name: "Sobremesas", emoji: "🍰" },
];

export const PRODUCTS_BY_CATEGORY = {
  lanche: [
    { id: "xsalada", name: "X-Salada", price: 22.9, desc: "Pão, carne, queijo, alface e tomate." },
    { id: "xbacon", name: "X-Bacon", price: 26.9, desc: "Pão, carne, queijo e bacon crocante." },
  ],
  bebida: [
    { id: "refrilat", name: "Refrigerante Lata", price: 6.0, desc: "350ml bem gelado." },
    { id: "agua", name: "Água", price: 4.0, desc: "Sem gás, 500ml." },
  ],
  sobremesa: [
    { id: "brownie", name: "Brownie", price: 12.0, desc: "Com calda de chocolate." },
    { id: "sorvete", name: "Sorvete", price: 10.0, desc: "Baunilha, 2 bolas." },
  ],
};

export const RESTAURANTS = [
  { id: "r1", name: "Burger Central", address: "Av. Central, 100", lat: -22.908, lon: -43.176, sampleItem: "X-Salada" },
  { id: "r2", name: "Lanche 24h", address: "Rua Primeiro, 10", lat: -22.907, lon: -43.177, sampleItem: "X-Bacon" },
  { id: "r3", name: "Rio Bebidas", address: "Rua das Águas, 20", lat: -22.909, lon: -43.175, sampleItem: "Refrigerante" },
  { id: "r4", name: "Doces da Lapa", address: "Lapa, 50", lat: -22.912, lon: -43.179, sampleItem: "Brownie" },
  { id: "r5", name: "Centro Grill", address: "Praça XV, 30", lat: -22.902, lon: -43.173, sampleItem: "X-Salada" },
  { id: "r6", name: "Sanduba Rápido", address: "Rua Riachuelo, 80", lat: -22.91, lon: -43.182, sampleItem: "X-Bacon" },
  { id: "r7", name: "Refri & Cia", address: "Av. Passos, 120", lat: -22.905, lon: -43.181, sampleItem: "Refri Lata" },
  { id: "r8", name: "Doce Sabor", address: "Rua Sete, 77", lat: -22.906, lon: -43.178, sampleItem: "Sorvete" },
  { id: "r9", name: "Praça Burger", address: "Praça Mauá, 5", lat: -22.894, lon: -43.179, sampleItem: "X-Salada" },
  { id: "r10", name: "Cinelândia Lanches", address: "Cinelândia, 12", lat: -22.9085, lon: -43.1765, sampleItem: "X-Bacon" },
];
