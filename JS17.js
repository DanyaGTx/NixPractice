'use strict'
 function divisibleByThree(str)
 {
    let sum = 0;
    for(let i of str)
    {
        sum = Number(sum) + Number(i);
    }
    if(sum % 3 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
 }
 let func = divisibleByThree('123');
 console.log(func);