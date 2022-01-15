'use strict'
function check_password(pass){
    if(pass.length >= 8 && pass.length <= 20){
        let capitalLetter = false;
        let lowercaseLetter = false;
        let numbers = false;
        let specialSym = false;
        for(let i of pass){
            if(i === i.toUpperCase()){
                capitalLetter = true;
            }
            if(i === i.toLowerCase()){
                lowercaseLetter = true;
            }
            if(i.match(/[0123456789]/gi)){
                numbers = true;
            }
            if(i.match(/[!@#$%^&*?]/gi)){
                specialSym = true;
            }
        }
        if(capitalLetter && lowercaseLetter && numbers && specialSym){
            return 'valid';
        }
        else{
            return 'not valid';
        } 
    }
    else{
        return 'not valid';
    }
} 
let func = check_password("Paaaaaa222!!!")
console.log(func)