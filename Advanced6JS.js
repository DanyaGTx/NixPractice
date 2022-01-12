'use strict'
function solution(str,N){
    if(str.length > N){
        return str.slice(0,N) + '...';
    }
    else{
        return str
    }
}
let func = solution('Testing String', 8);
console.log(func)
