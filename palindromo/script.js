function verificaPalindroma() {
  let parola = document.getElementById("parola").value;
  let risultato = document.getElementById("risultato");

  if (parola === parola.split("").reverse().join("")) {
    risultato.innerHTML = parola + " è palindroma";
  } else {
    risultato.innerHTML = parola + " non è palindroma";
  }
}
