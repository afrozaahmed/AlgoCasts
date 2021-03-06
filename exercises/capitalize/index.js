// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*function capitalize(str) {
let b=str.split("");

for(let i=0;i<b.length;i++){
 if(i==0){
   b[i] = b[i].toUpperCase();
 }
  else if(b[i] == " "){
    
    b[i+1] = b[i+1].toUpperCase();
  }
}
return b.join("");
}*/

function capitalize(str){
    let word = [];

for(let ele of str.split(' ')){
  word.push(ele[0].toUpperCase()+ele.slice(1));
}
return word.join(' ');
}

module.exports = capitalize;
