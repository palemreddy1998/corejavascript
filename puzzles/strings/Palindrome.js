console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("race Car")); // true
console.log(isPalindrome("biryani")); // true

function isPalindrome(word) {
    // Replace all non-letter chars with "" and change to lowercase
    var lettersOnly = word.toLowerCase().replace(/\s/g, "");

    // Compare the string with the reversed version of the string
    return lettersOnly === lettersOnly.split("").reverse().join("");
}