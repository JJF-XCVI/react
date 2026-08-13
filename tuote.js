const tuotteet = [
    { nimi: "Kahvi", hinta: 4.5 },
    { nimi: "Tee", hinta: 3 },
    { nimi: "Kaakao", hinta: 3.5 }
];
//1.1 on yhtä kuin 10% hinnan nousua
const nimet = tuotteet.map ((t) => ({nimi: t.nimi, hinta: t.hinta * 1.1}));
//Hakee kaikki missä on K kirjain t.nimi.includes('K')
const kalliit = tuotteet.filter((t) => t.nimi.includes('K'));
//return t.hinta > max ? t.hinta : max vertailee pareittain arvoja kunnes tulee lopputulos missä selvii mikä on isoin numero
const yhteensa = tuotteet.reduce((max,t)=> {return t.hinta > max ? t.hinta : max;});
console.log(nimet);
console.log(kalliit);
console.log(yhteensa);