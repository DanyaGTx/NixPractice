'use strict'
function solve(str){
    let bigLetter = 0;
    let smallLetter = 0;
    for(let i of str){
        if(i === i.toLowerCase()){
            smallLetter++;
        }
        else if(i === i.toUpperCase()){
            bigLetter++;
        }
    }
    if(bigLetter > (str.length/2)){
        str = str.toUpperCase();
    }else{
        str = str.toLowerCase();
    }
    return str;
}
let func = solve('CODe');
console.log(func);