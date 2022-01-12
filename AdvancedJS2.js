'use strict'
function mispelled(word1,word2){
    let counter = 0;
    if(word1.length === word2.length)
    {
        for(let i in word2){
            if(word2[i] !== word1[i]){
                counter++
            }
        }
    }
    else if(word1.length > word2.length && word1.length - word2.length === 1 ){
       for(let i in word1){
           if(word1[i] !== word2[i - 1]){
               counter++
           }
       }
    }
    else if(word2.length > word1.length && word2.length - word1.length === 1){
        for(let i in word2){
            if(word2[i] !== word1[i - 1]){
                counter++
            }
        }
    }
    if(counter === 1){
        return true
    }
    else{
        return false
    }
}
let func = mispelled('versed','xersed')
console.log(func)