function gioca(scelta) {
  /*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.*/

  // Genera un numero random per l'utente e il computer
  let numero = Math.floor(Math.random() * 5) + 1;
  let numeroComputer = Math.floor(Math.random() * 5) + 1;

  // Calcola la somma dei due numeri
  let somma = numero + numeroComputer;

  // Stabilisce se la somma è pari o dispari
  let risultato = "";
  if (somma % 2 == 0) {
    risultato = "pari";
  } else {
    risultato = "dispari";
  }

  // Confronta il risultato con la scelta dell'utente
  if (risultato == scelta) {
    document.getElementById("risultato").innerHTML = "Hai vinto!";
  } else {
    document.getElementById("risultato").innerHTML = "Hai perso!";
  }

  // Mostra i risultati
  document.getElementById("scelta").innerHTML = scelta;
  document.getElementById("numero").innerHTML = numero;
  document.getElementById("numero-computer").innerHTML = numeroComputer;
  document.getElementById("somma").innerHTML = somma;
}
