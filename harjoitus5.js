
function odota(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//sain kaiken koodista tekstistä Akronisuus vaihdoin vaa tervehdi viivellä laske nimi a,b sitten annoin arvot a ja b
async function laskeViivella(a,b) {
    await odota(1000);
    return a + b;
}

async function main() {
    const viesti = await laskeViivella(5,10);
    console.log("Tulos on:" + viesti)
}

main();

