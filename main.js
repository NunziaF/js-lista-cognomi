//Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
//Scrivi anche la posizione della lista in cui il nuovo utente si trova

//Chiedo all'utente d'inserire il proprio cognome
var cognomeUtente = prompt("inserisci il tuo cognome");

//Faccio la lista dei cognomi
var cognomi = ["Bianchi","Valzano","Rossi","Antonelli"];

//Inserisco il cognome dell'utente nella lista dei cognomi
cognomi.push(cognomeUtente);

console.log(cognomi);

//Metto in ordine alfabetico i cognomi e li salvo
var listaOrdinata = cognomi.sort();

var elemento;

//Stampo in pagina la lista ordinata in ordine alfabetico
for (var i = 0; i < listaOrdinata.length; i++) {

  lista = listaOrdinata[i];
  elemento = document.getElementById('lista').innerHTML;

  document.getElementById("lista").innerHTML = elemento + "<li>" + lista + "</li>";
}

//Scrivo la posizione della lista in cui l'utente si trova
var posizione = (listaOrdinata.indexOf(cognomeUtente)) +1;

//Stampo la posizione della lista in cui il nuovo utente si trova

document.getElementById("numero").innerHTML = "Il tuo cognome si trova nella posizione numero " + posizione;
