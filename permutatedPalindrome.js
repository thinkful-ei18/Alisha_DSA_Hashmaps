'use strict';
const HashMap = require('./HashMap');

/*
Write an algorithm to check whether any permutation of a string is a palindrome. Given the string "acecarr", the algorithm should return true, because the letters in "acecarr" can be rearranged to "racecar", which is a palindrome. In contrast, given the word "north", the algorithm should return false, because there's no way to rearrange those letters to be a palindrome.
*/

const permutatedPalindrome = string => {
  const isPalindrome = new HashMap();

  // loop over the string
  // the letter is the key, the counter is the value
  // if the key is NOT in the hash, add it and set the value 1
  // if the key IS in the hash, just increase the value by 1

  for (let i = 0; i < string.length; i++) {
    let characterCount;

    try {
      characterCount = isPalindrome.get(string[i]);
    }
    catch (err) {
      characterCount = 0;
    }

    if (string[i] !== ' ') {
      isPalindrome.set(string[i], (characterCount + 1));
    }
  }

  // set a count variable
  // go through the slots array
  // at each index get the numerical value for that key
  // determine if the value is odd or even using modulo
  // if it's odd, increase count by 1
  // if count ends up being greater than 1, it's not a palindrome

  let hashedCount = 0;

  for (let i = 0; i < isPalindrome.length; i++) {
    if (string[i] !== ' ' && isPalindrome.get(string[i]) % 2 !== 0) {
      hashedCount += 1;
    }
  }

  return hashedCount > 1 ? `'${string}' is not a palindrome.` : `'${string}' is a palindrome!`;

};

console.log(permutatedPalindrome('hello'));
console.log(permutatedPalindrome('acecarr'));
console.log(permutatedPalindrome('too bad i hid a boot'));