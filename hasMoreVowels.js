/*
Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

If the phrase is over half vowels, it should return true.

Don’t consider “y” as a vowel.

Uppercase vowels are still vowels.
*/

function hasMoreVowels(word) {
    let wordToCheck = word.toLowerCase()
    let vowels = ['a','e','i','o','u']
    let numVowels = 0
    for(let i in wordToCheck) {
        if (vowels.includes(wordToCheck[i])) {
            numVowels += 1
        }
    }
    return numVowels > wordToCheck.length / 2
}

console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('Aal'))