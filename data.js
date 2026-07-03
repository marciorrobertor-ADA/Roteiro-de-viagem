const tripData = {
  overview: {
    origin: "Brasília - DF",
    destination: "João Pessoa - PB",
    departure: "08/07 às 17:00",
    estimatedArrival: "10/07",
    totalDistance: "~2.400 km"
  },
  routes: [
    {
      id: 1,
      title: "Trecho 1: Brasília (DF) a Barreiras (BA)",
      road: "BR-020",
      conditions: "Pista em boas condições gerais, trechos de reta longa. Atenção à noite por falta de iluminação e animais na pista.",
      distance: "600 km"
    },
    {
      id: 2,
      title: "Trecho 2: Barreiras (BA) a Feira de Santana (BA)",
      road: "BR-242",
      conditions: "Serra da Chapada Diamantina (Seabra). Atenção redobrada às curvas e fluxo de caminhões. Pista simples em grande parte.",
      distance: "750 km"
    },
    {
      id: 3,
      title: "Trecho 3: Feira de Santana (BA) a Aracaju (SE)",
      road: "BR-116 e BR-101",
      conditions: "Trânsito pesado na saída da BR-116. A BR-101 tem trechos duplicados mas exige atenção a radares e tráfego local.",
      distance: "320 km"
    },
    {
      id: 4,
      title: "Trecho 4: Aracaju (SE) a João Pessoa (PB)",
      road: "BR-101",
      conditions: "Via predominantemente duplicada. Viagem mais tranquila, mas com pedágios e travessias urbanas.",
      distance: "600 km"
    }
  ],
  stations: [
    {
      id: 1,
      name: "Posto Rosário (Rede Marajó)",
      location: "Correntina - BA (Divisa GO/BA na BR-020)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,30 | Diesel: ~R$ 6,00",
      features: "Restaurante 24h, banheiros limpos, pátio seguro."
    },
    {
      id: 2,
      name: "Posto Macaubense",
      location: "Barreiras - BA (BR-242)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,25 | Diesel: ~R$ 5,95",
      features: "Ótima estrutura para lanches rápidos e banho."
    },
     {
      id: 3,
      name: "Posto Nova Itaberaba",
      location: "Itaberaba - BA (BR-242)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,20 | Diesel: ~R$ 5,90",
      features: "Parada estratégica antes de chegar a Feira de Santana."
    },
    {
      id: 4,
      name: "Posto São Gonçalo (Rede São Gonçalo)",
      location: "Feira de Santana - BA (BR-116)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,05 | Diesel: ~R$ 5,85",
      features: "Gigantesca estrutura. Restaurante excelente, conveniência, seguro."
    }
  ],
  accommodations: [
    {
      id: 1,
      city: "Feira de Santana - BA",
      name: "Ibis Feira de Santana",
      type: "Hotel de Rede",
      notes: "Localizado perto da rodovia, ótimo custo-benefício, padrão garantido de limpeza, check-in 24h. Ideal para chegar 23h."
    },
    {
      id: 2,
      city: "Feira de Santana - BA",
      name: "Hotel Classe Apart",
      type: "Hotel",
      notes: "Mais espaço e conforto para a família, boa localização e garagem segura."
    },
    {
      id: 3,
      city: "Alagoinhas - BA (Alternativa)",
      name: "Hotel Aster",
      type: "Hotel",
      notes: "Se decidir dirigir mais 1h30 após Feira de Santana, Alagoinhas tem o Aster com boa cama e café da manhã, mas atenção ao cansaço."
    }
  ]
};
