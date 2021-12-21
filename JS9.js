'use strict'
function func(arr)
{
    let sum = 1;
    for(let i = 0; i<arr.length;i++)
    {
       sum *= arr[i];
    }
    return sum;
}
let newArr = func([1,2,3,4])
console.log(newArr);

