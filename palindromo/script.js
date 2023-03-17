/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

function verificaPalindroma() {
  let parola = document.getElementById("parola").value;
  let risultato = document.getElementById("risultato");

  if (parola === parola.split("").reverse().join("")) {
    risultato.innerHTML = parola + " è palindroma";
  } else {
    risultato.innerHTML = parola + " non è palindroma";
  }
}
