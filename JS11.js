'use strict'
function func(arr1,arr2)
{
    let sumArr1 = 1;
    let sumArr2 = 1;
    for(let i of arr1)
    {
        sumArr1*=i;
    }
    for(let j of arr2)
    {
        sumArr2*=j;
    }
    let res = sumArr1 - sumArr2;
    return res;
}
console.log(func([3, 2, 5], [1, 4, 4]))

