
//let ja const
   let maara = 5;
   toinenluku = 7;
   const nimi = "Liisa"
   function laskeNelio(a, b) {
      return a * b;
   }
   const laskenelioNuolella = (a, b) => a + b;

   //template literal
   console.log(`Nimi on ${nimi} ja neliö on ${laskenelioNuolella(maara, toinenluku)}`);