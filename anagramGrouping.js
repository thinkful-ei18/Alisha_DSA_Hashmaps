'use strict';
const HashMap = require('./HashMap');

/*
Write an algorithm to group a list of words into anagrams. For example, if the input was ['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race'], the output should be: [['east', 'teas', 'eats'], ['cars', 'arcs'], ['acre', 'race']].*/

const anagram = arr => {
// sort each word alphabetically
// loop over the alphabetized array checking to see if the key exists in the hash
// if the key does NOT exist, add the alphabatized word as the key and the original word as the value in an array
// if the key DOES exist, add the original word to the corresponding value array

  let grouped = new HashMap();

  let alphabetically = arr.map(word => word.split('').sort().join(''));
  // [ 'aest', 'acrs', 'acer', 'acrs', 'aest', 'aest', 'acer' ]

  for (let i = 0; i < alphabetically.length; i++) {
    let anagrams;

    try {
      anagrams = grouped.get(alphabetically[i]);
    }
    catch (err) {
      anagrams = [];
    }

    grouped.set(alphabetically[i], [...anagrams, arr[i]]);
  }

  // loop over alphabetized array to find matching keys
  // if that key value's length is greater than 1, add it to arrayOfAnagrams

  let arrayOfAnagrams = [];

  for (let i = 0; i < alphabetically.length; i++) {

    let hashedValue = grouped.get(alphabetically[i]);
    let accountedFor = arrayOfAnagrams.includes(hashedValue);

    if (!accountedFor && hashedValue.length > 1) {
      arrayOfAnagrams = [...arrayOfAnagrams, hashedValue];
    }

  }
  
  return arrayOfAnagrams;

};

console.log(anagram(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race', 'alpha']));