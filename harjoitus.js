function odota(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function laskeViivella(a,b) {
    await odota(1000);
    return a + b;
}

async function main() {
    const viesti = await laskeViivella(5,10);
    console.log(viesti)
}

main();

