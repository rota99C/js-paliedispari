// chiediamo all'utente di scegliere pari o dispari
let sceltaUser = prompt("Scegli: pari o dispari?")
// console.log(sceltaUser);


// se l'utente sceglie pari, il pc è dispari
if (sceltaUser == "pari") {
    let sceltaPc = "dispari"
    // console.log(sceltaPc);
} else if (sceltaUser == "dispari") {
    let sceltaPc = "pari"
    // console.log(sceltaPc);
}

// chiediamo all'utente di inserire un numero da 1 a 5
let numberUser = parseInt(prompt("Scegli un numero da 1 a 5"))

// generiamo un numero random da 1 a 5 per il pc (usando una funzione)

function randomGenerator() {
    let random = Math.floor(Math.random() * 5) + 1;
    return random;
}

var numberPc = randomGenerator()
console.log(numberPc);

// sommiamo i due numeri

let somma = numberUser + numberPc
console.log(somma);

// stabiliamo se la somma è pari o dispari (usando una funzione)

function pariDispari(sum) {
    if (sum % 2 != 0) {
        alert("la somma è dispari")
    } else if (sum % 2 == 0) {
        alert("la somma è pari")
    }
}

pariDispari(somma)

// dichiariamo il vincitore
