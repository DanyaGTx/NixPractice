'use strict'
function words(str,num)
{
   let splits = str.split(' ',str.length);
   let newArr = [];
   for(let i = 0;i<splits.length;i++)
   {
       if(splits[i].length > num)
       {
           newArr.push(splits[i]);
       }
   }
   return newArr;
}
let func = words('Над городом облака, коридоры, берега, проспект, река.', 7);
console.log(func);
