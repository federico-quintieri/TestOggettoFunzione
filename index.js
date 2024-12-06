// Mettiamo in myFramework tutta la funzione oggetto esportata
const myFramework = require('./myFramework');

// Richiamo funzione myFramework che re3stituisce un oggetto ed esegue roba
const app = myFramework();

// Faccio un console log della proprietà version della funzione oggetto myFramework
console.log(myFramework.version); // '1.0.0'

// myFramework ritorna una funzione
app();
// Però la funzione creata dentro a myFramework viene anche gestita come un oggetto perché aggiungiamo il metodo .listen
// Quindi ora richiamo metodo listen della funzione/OGGETTO app ovvero il return della funzione myFramework
app.listen(3000, () => {
    console.log("Callback eseguita!");
});
