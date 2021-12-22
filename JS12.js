'use strict'
function between(a,b)
{
    if(a > b)
    {
        console.log('Error');
    }
    else
    {
        let arr = [];
        for(let i = a;i<=b;i++)
        {
            arr.push(i);
        }
        return arr;
    }
}
console.log(between(20,25));