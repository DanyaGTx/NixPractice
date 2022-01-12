'use strict'
function example(arr,N){
   let counter = 0;
   let newArr = [];
   for(let i = 0; i<arr.length-1;i++){
       for(let j = i + 1; j < arr.length;j++){
           if(N === arr[j] + arr[i]){
               newArr.push(i,j)
               counter++;
           }
       }
   }
   return newArr;
}
let func = example([2, 7, 11, 15], 22)
console.log(func)