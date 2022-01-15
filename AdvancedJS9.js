'use strict'
function  daysRepresented(arr){
   let days = 0;
   let newArr = [];
   let result; 
   for(let i = 0;i<arr.length;i++){
       for(let j = 0; j<arr.length;j++){  
            days = arr[i][j] - arr[i][j + 1]//Вычитаем день отъезда от дня прибытия
            if(days){
                newArr.push(Math.abs(days))
            }            
       }
   }
   let sum = 0;
   for(let i in newArr){
        sum += newArr[i]
   }
   result = sum + arr.length;
   return result;
}
let func = daysRepresented([[2,8], [10,16],[19,26]])
console.log(func);