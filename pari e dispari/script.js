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
const computerNumber = Math.floor(Math.random() * 5) + 1;

// 4. stampa il numero del computer nel console
console.log(computerNumber)

// 5. somma i due numeri 
const sum = userNumber + computerNumber;

// 6. stampa la somma dei due numeri nel console
console.log(sum)

// 7. stabila se la somma dei due numeri è pari o dispari (usando una funzione)

let evenOrOdd = ""

if(sum % 2 === 0) {
    evenOrOdd = "pari"
} else {
    evenOrOdd = "dispari"
}

// 8. dichiara chi ha vinto : se la risposta del punto 7 è uguale alla scelta dell'utente, ha vinto il utente; altrimenti ha vinto il computer 

if(evenOrOdd === userChoice) {
    alert("Hai vinto!")
} else {
    alert("Hai perso")
}