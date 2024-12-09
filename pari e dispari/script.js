/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

// 1. chiede all'utente di scegliere pari o dispari
const userChoice = prompt("Sceglie pari o dispari");

// 2. chiede all'utente di inserire un numero da 1 a 5
const userNumber = Number(prompt("Sceglie un numero tra 1 e 5"));

// 3. genera un numero random (da 1 a 5) per il computer (usando una funzione)
/**
 * Returns a random number between min & max (inclusive)
 * 
 * @param {number} min - min number
 * @param {number} max - max number
 * @returns {number}
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const computerNumber = getRndInteger(1, 5);

// 4. stampa il numero del computer nel console
console.log(computerNumber)

// 5. somma i due numeri 
const sum = userNumber + computerNumber;

// 6. stampa la somma dei due numeri nel console
console.log(sum)

// 7. stabila se la somma dei due numeri è pari o dispari (usando una funzione)
/**
 * Check if a given number is even or odd
 * 
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    return false;
}

if((isEven(sum) && userChoice === "pari") || (!isEven(sum) && userChoice === "dispari")) {
    alert ("Hai vinto!")
} else {
    alert("Hai perso")
}

/*let evenOrOdd = ""

if(sum % 2 === 0) {
    evenOrOdd = "pari"
} else {
    evenOrOdd = "dispari"
}
*/

// 8. dichiara chi ha vinto : se la risposta del punto 7 è uguale alla scelta dell'utente, ha vinto il utente; altrimenti ha vinto il computer 

/*if(evenOrOdd === userChoice) {
    alert("Hai vinto!")
} else {
    alert("Hai perso")
}
*/