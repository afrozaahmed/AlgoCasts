// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*function anagrams(stringA, stringB) {
    const regex = /[a-zA-Z]+/g;

let newA = (stringA.match(/[a-zA-Z]+/g)).join("");
let newB = (stringB.match(/[a-zA-Z]+/g)).join("");


if(newA.length != newB.length){
  return false;
}
else{
  let objA= {};
  let objB = {};
  console.log(newA)
  for(let ele of newA){
    if(!objA[ele]){
      objA[ele] = 1;
    }else{
      objA[ele]++
    }
  }
  for(let ele of newB){
    if(!objB[ele]){
      objB[ele] = 1;
    }else{
      objB[ele]++
    }
  }
  let len = Object.keys(objA).length > Object.keys(objB).length ? Object.keys(objA).length : 
  Object.keys(objB).length
  let flag=true;
  for(let ele in objA){
    if(objA[ele] == objB[ele]){
      continue;
    }
    else{
      flag = false;
      break;
    }
  }
  if(flag == true){
    return true;
  }
  else{
    return false;
  }
}
}*/

function anagrams(stringA, stringB){
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str){
    return str.replace(/[^\w]/g,'').split("").sort().join("");
}


module.exports = anagrams;
