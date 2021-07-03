// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let temp="";
    for(let i=0;i<arr.length;i++){
    for(let j=0;j<(arr.length-i-1);j++){
        if(arr[j]>arr[j+1]){
          temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]= temp;
      }
    }
    
    }
    return arr;
}

function selectionSort(arr) {
    let temp="";
for( let i=0;i<arr.length;i++){
  let index = i;
for(let j=i+1;j<arr.length;j++){
	if(arr[j]<arr[index]){
  index=j;
  }
  
}
  if(index !== i){
  temp=arr[index];
    arr[index]=arr[i];
    arr[i]=temp;
  }
}
    return arr;
}

function mergeSort(arr) {
if(arr.length === 1){
    return arr;
}

const mid = Math.floor(arr.length/2);
const left = arr.slice(0,mid);
const right = arr.slice(mid,arr.length);

return merge(mergeSort(left),mergeSort(right));

}

function merge(left, right) {
const result=[];
while(left.length && right.length){
    if(left[0]<right[0]){
        result.push(left.shift());
    }else{
        result.push(right.shift());
    }
}
return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
