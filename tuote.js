const tuotteet = [
    { nimi: "Kahvi", hinta: 4.5 },
    { nimi: "Tee", hinta: 3 },
    { nimi: "Kaakao", hinta: 3.5 }
];
const nimet = tuotteet.map ((t) => t.nimi);
const kalliit = tuotteet.filter((t) => t.hinta > 3.2);
const yhteensa = tuotteet.reduce((summa, t) => t.hinta, 0);