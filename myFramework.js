// In JS a FUNCTION is ALSO an OBJECT \\
// So you can add properties to the function/obiect \\

// Faccio una funzione di nome myFramework
function myFramework() {
  // Dentro la funzione creo altra funzione di tipo arrow
  const app = () => {
    console.log("App chiamata!");
  };

  // Aggiungo metodo di nome listen alla funzione app che è anche un oggetto
  app.listen = (port, callback) => {
    console.log(`Server in ascolto sulla porta ${port}`);
    if (callback) callback();
  };
  // Ritorno l'oggetto app che è anche una funzione 
  return app;
}

// Aggiungi proprietà alla funzione principale perché ogni funzione può essere trattata come un oggetto
myFramework.version = "1.0.0";

// Esporta la funzione che può essere trattata come un oggetto tramite CommonJS
module.exports = myFramework;
