/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// 1. chiede all'utente di inserire una parola (prompt)
const userWord = prompt("Inserisca una parola"); 

// 2. crea una funzione per capire se la parola inserita è palindroma (baab) (loop)
/**
 * Check if a given word is a palindrome or not
 * 
 * @param {string} word - given word 
 * @returns {boolean} - true = palindrome
 */
function isPalindrome(word) {
    let wordBackwards="";
    for(let i=userWord.length - 1; i >= 0; i--) {
        wordBackwards = wordBackwards + userWord[i];
    }
    if(userWord === wordBackwards) {
        alert("La parola è palindroma")
    } else {
        alert("La parola non è palindroma")
    }
}
