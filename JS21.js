'use strict'
function switcheroo(str)
{
   let newStr = '';
   for(let i of str)
   {
       
       if(i == 'a' || i == 'b')
       {
            if(i == 'a')
            {
                i = 'b';
                newStr +=i;
            }
            else
            {
                i = 'a';
                newStr +=i;
            }
       }
       if(i == 'c')
       {
            newStr +=i;
       }
   }
   return newStr;
}
let func = switcheroo('aaabcccbaaa');
console.log(func);