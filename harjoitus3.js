const auto = {merkki:"Toyota", malli:"Corolla",vuosi:"2021"}
//purkaa
const muuttuja = {merkki, vuosi} = auto
// Kolmoispisteet keräävät kaikki funktiolle syötetyt yksittäiset argumentit ja muuttavat ne yhdeksi taulukoksi nimeltä numbers..reduce()
function laskeYhteensa(...numbers) {
    return numbers.reduce((acc,curr) => acc + curr, 0);
}
//acc ja curr hoitaa sen laskemis puolen eli alussa lisää esim numero 2 0 mikä on 2 ja niin edelleen
console.log(merkki)
console.log(vuosi)
console.log(laskeYhteensa(2,4,6,8));