/* Palindroma
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
    for(let i=word.length - 1; i >= 0; i--) {
        wordBackwards = wordBackwards + word[i];
    }

    if(word === wordBackwards) {
        return true;
    } else {
        return false;
    }
}

// 3. applica la funzione 
const checkIsPalindrome = isPalindrome(userWord);

// 4. informa l'utente se la parola è palindroma o no
if(checkIsPalindrome) {
    alert("La parola è palindroma")
} else {
    alert("La parola non è palindroma")
}