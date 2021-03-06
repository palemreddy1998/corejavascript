//"Mary" is an anagram of "Army"
var firstWord = "Mary";
var secondWord = "Army";

console.log(isAnagram(firstWord, secondWord)); // true

function isAnagram(first, second) {
    // For case insensitivity, change both words to lowercase.
    var a = first.toLowerCase();
    var b = second.toLowerCase();

    // Sort the strings, and join the resulting array to a string. Compare the results
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}