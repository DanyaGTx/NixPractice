'use strict'
function spacey(arr)
{
    let newArr = [];
    let sum = '';
    for(let i = 0;i<arr.length;i++)
    {
        sum += arr[i];
        newArr.push(sum)
    }
    return newArr;
}
let func = spacey(['this','cheese','has','no','holes']);
console.log(func);