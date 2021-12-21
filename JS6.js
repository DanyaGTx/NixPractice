'use strict'
let arr = [10, 20, 30, 50, 235, 3000];
for(let i of arr)
{
    let firstLetter = i.toString().substr(0, 1);
    if(firstLetter == 1 || firstLetter == 2 || firstLetter == 5)
    {
        console.log(i)
    }

}
