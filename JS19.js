'use strict'
function evensAndOdds(num)
{
    if(num % 2 == 0)
    {
        let bin = +parseInt(num).toString(2)//Перевод в двоичную систему
        return bin;
    }
    if(num % 2 == 1)
    {
        let hex = num.toString(16);//Перевод в шестнадцатиричную систему
        if (hex.length % 2) {
            return hex;
        }
    }
}
let func = evensAndOdds(13);
console.log(func);