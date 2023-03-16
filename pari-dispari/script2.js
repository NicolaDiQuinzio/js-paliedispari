function gioca(scelta) {
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
