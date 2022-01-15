'use strict'
function solve(s, k){
    const str=s.split('').sort().slice(0,k)
    const obj={};
    str.map(v=>obj[v]=obj[v]?obj[v]+1:1)
    s=s.split('').map((v,i,arr)=>{
        if (obj[v]>0){
        obj[v]--; 
        return v='';
        } 
        return v;
    })
    return s.join('')
}
let func = solve('abracadabra',6)
console.log(func)
