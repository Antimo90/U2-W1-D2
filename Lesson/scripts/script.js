const fillYearSpan = function () {
  // recuperiamo lo span vuoto
  const emptySpan = document.getElementById("year");
  // creo una nuova data in questo momento
  const now = new Date(); // funzione costruttore che genera un oggetto di tipo Date
  emptySpan.innerText = now.getFullYear();
};

fillYearSpan();
