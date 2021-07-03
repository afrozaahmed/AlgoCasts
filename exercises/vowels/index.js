// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str){
let matches = str.toLowerCase().match(/[aeiou]/g);
return matches ? matches.length : 0;
}

/*function vowels(str) {
    let vowel = ["a","e","i","o","u"];
    let count=0;
    for(let char of str.toLowerCase()){
      if(vowel.includes(char)){
        count=count+1;
      }
    }
    return count;
}*/

module.exports = vowels;
