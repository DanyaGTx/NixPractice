'use strict'
function sortToType(arr)
{
    let obj = {};
    obj.number = [];
    obj.string = [];
    obj.boolen = [];
    for(let i of arr)
    {
        if(typeof i === 'string')
        {      
            obj.string.push(i);      
        }
        if(typeof i === 'number')
        {
            obj.number.push(i);
        }
        if(typeof i === 'boolean')
        {
            obj.boolen.push(i);
        }
    }
    return obj;
}
let func = sortToType(['a', 1, 2, false, 'b',true]);
console.log(func);