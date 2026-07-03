const tripData = {
  overview: {
    origin: "BrasÃ­lia - DF",
    destination: "JoÃ£o Pessoa - PB",
    departure: "08/07 Ã s 17:00",
    estimatedArrival: "10/07",
    totalDistance: "~2.400 km"
  },
  routes: [
    {
      id: 1,
      title: "Trecho 1: BrasÃ­lia (DF) a Barreiras (BA)",
      road: "BR-020",
      conditions: "Pista em boas condiÃ§Ãµes gerais, trechos de reta longa. AtenÃ§Ã£o Ã  noite por falta de iluminaÃ§Ã£o e animais na pista.",
      distance: "600 km"
    },
    {
      id: 2,
      title: "Trecho 2: Barreiras (BA) a Feira de Santana (BA)",
      road: "BR-242",
      conditions: "Serra da Chapada Diamantina (Seabra). AtenÃ§Ã£o redobrada Ã s curvas e fluxo de caminhÃµes. Pista simples em grande parte.",
      distance: "750 km"
    },
    {
      id: 3,
      title: "Trecho 3: Feira de Santana (BA) a Aracaju (SE)",
      road: "BR-116 e BR-101",
      conditions: "TrÃ¢nsito pesado na saÃ­da da BR-116. A BR-101 tem trechos duplicados mas exige atenÃ§Ã£o a radares e trÃ¡fego local.",
      distance: "320 km"
    },
    {
      id: 4,
      title: "Trecho 4: Aracaju (SE) a JoÃ£o Pessoa (PB)",
      road: "BR-101",
      conditions: "Via predominantemente duplicada. Viagem mais tranquila, mas com pedÃ¡gios e travessias urbanas.",
      distance: "600 km"
    }
  ],
  stations: [
    {
      id: 1,
      name: "Posto RosÃ¡rio (Rede MarajÃ³)",
      location: "Correntina - BA (Divisa GO/BA na BR-020)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,30 | Diesel: ~R$ 6,00",
      features: "Restaurante 24h, banheiros limpos, pÃ¡tio seguro."
    },
    {
      id: 2,
      name: "Posto Macaubense",
      location: "Barreiras - BA (BR-242)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,25 | Diesel: ~R$ 5,95",
      features: "Ã“tima estrutura para lanches rÃ¡pidos e banho."
    },
     {
      id: 3,
      name: "Posto Nova Itaberaba",
      location: "Itaberaba - BA (BR-242)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,20 | Diesel: ~R$ 5,90",
      features: "Parada estratÃ©gica antes de chegar a Feira de Santana."
    },
    {
      id: 4,
      name: "Posto SÃ£o GonÃ§alo (Rede SÃ£o GonÃ§alo)",
      location: "Feira de Santana - BA (BR-116)",
      type: "24h",
      fuelPrice: "Gasolina: ~R$ 6,05 | Diesel: ~R$ 5,85",
      features: "Gigantesca estrutura. Restaurante excelente, conveniÃªncia, seguro."
    }
  ],
  accommodations: [
    {
      id: 1,
      city: "Feira de Santana - BA",
      name: "Ibis Feira de Santana",
      type: "Hotel de Rede",
      notes: "Localizado perto da rodovia, Ã³timo custo-benefÃ­cio, padrÃ£o garantido de limpeza, check-in 24h. Ideal para chegar 23h."
    },
    {
      id: 2,
      city: "Feira de Santana - BA",
      name: "Hotel Classe Apart",
      type: "Hotel",
      notes: "Mais espaÃ§o e conforto para a famÃ­lia, boa localizaÃ§Ã£o e garagem segura."
    },
    {
      id: 3,
      city: "Alagoinhas - BA (Alternativa)",
      name: "Hotel Aster",
      type: "Hotel",
      notes: "Se decidir dirigir mais 1h30 apÃ³s Feira de Santana, Alagoinhas tem o Aster com boa cama e cafÃ© da manhÃ£, mas atenÃ§Ã£o ao cansaÃ§o."
    }
  ]
};
