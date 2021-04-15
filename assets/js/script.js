/**
 * CAMPO MINATO
 * 
 * OBIETTIVO: estrarre 100 numeri da 1 a cento tutti diversi
 * il computer ne estrae 16 (bombe)
 * il giocatore ne estrae una alla volta
 * vince se estrae 100 - 16 (84) numeri senza mai incontrare una bomba
 * i numeri inseriti devono essere tutti diversi e compresi fra 1 e 100
 * il punteggio è dato da quanti tentativi sei tiuscito a fare prima di incontrare una bomba
 * il gioco finisce quando incontri una bomba o quando il giocatore ha fatto 84 tentatitivi
 * 
 */
var limite = 100;
var totaleBombe = 16;
var pcBombe = generatoreBombe(totaleBombe, limite);

var numGiocati = [];
// flag
var gameOver = false;
// 84 tentativi
var maxTentativi = limite - totaleBombe;

while(gameOver === false){
    var number = parseInt(prompt("Inserisci un numero"));
    // verifico che il numero non sia presente dentro arrNumeriGiocati
    if(numGiocati.includes(number) === true){
      alert("Hai già giocato questo numero. Riprova!")
    }
    // verifico che il numero non sia fra le bombe. se è presente finsce il gioco
    else if(pcBombe.includes(number) === true){

      alert("Hai perso! Hai fatto " + numGiocati.length + " tentativi");
    }
    else if(number > limit){
      alert("Hai superato il limite di 100");
    }
    else if(number < 1){
      alert("Non puoi inserire un numero inferiore ad 1!");
    }
    else if( isNaN(number) === true ) {
      alert("Non hai inserito un numero!")
    }
    else{
      numGiocati.push(number);
      if(maxTentativi === numGiocati.length){
        alert("Hai Vinto");
        gioco_finito = true;
      }
    }
}



// ----------------------------- FUNZIONI ----------------------------------
// funzione che mette le bombe in un array
function generatoreBombe(numBombe, max){
 var arrayBombe = [];

 while(arrayBombe.length < numBombe){

    var bomba = rdmNumber(max);
    // includes di default è true, quindi quando è false aggiunge la bomba
  if(arrayBombe.includes(bomba) === false){
    arrayBombe.push(bomba);
  }
  
 }
    return arrayBombe;
}

// funzione che mi crea un numero random
function rdmNumber(max){
  return Math.ceil(Math.random() * max);
}