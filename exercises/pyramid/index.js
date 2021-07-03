// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n){
    const mid = Math.floor((2*n-1)/2);
    for(let row=0; row<n; row++){
        let level='';
        for(let col =0;col<2*n-1;col++){
            if(mid - row <= col && mid + row >=col){
                level = level+'#';
            }else{
                level = level+' ';
            }
        }
        console.log(level);
    }

}

/*function pyramid(n) {
    for(let i=1;i<=n;i++){
        let str = '';
        for(let j=0;j<n-i;j++) str+= ' ';
          for(let j=2*i-1;j>0;j--) str+= '#';
          for(let j=0;j<n-i;j++) str+= ' ';
        console.log(str);
      }
}*/

module.exports = pyramid;
