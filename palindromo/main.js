// chiedo all'utente di inserire una parola
let userWord = prompt("scrivi una parola")

// transformo la parola in un array
const myArray = userWord.split("")
// console.log(myArray);

// clono l'array appena ottenuto - perché reverse SOVRASCRIVE l'array precedente
let myArray_1 = [...myArray]
// console.log(myArray_1);

// creo una funzione che rovescia gli array
function arrayReverse(array) {
    let reverse = array.reverse();
    return reverse;
}

// rovescio l'array ottenuto dalla parola dell'utente
let myArrayReverse = arrayReverse(myArray_1)
// console.log(myArrayReverse);

// trasformo l'array reverse in una stringa
let myArrayReverseString = myArrayReverse.join()

// verifico se la parola è palindroma
if (myArray == myArrayReverseString) {
    alert("la tua parola è palindroma");
} else {
    alert("la tua parola non è palindroma");
}
