'use strict'
function func(arr){
    const unwantedNames = ["Дима", "Саша", "Ольга", "Никита"];
    let newArr = [];
    for(let i of arr)
    {
        for(let j of unwantedNames)
        {
            if(i === j)
            {
              i = ' ';//Если имя совподает с лишним,то делаем пустую строку
            }
        }
        if(i != ' ')//Записываем всё, кроме пустой строки в новый массив
        { 
            newArr.push(i);
        }
    }
    return newArr;
}
let newArray = func(["Никита", "Саша", "Анастасия", "Дима", "Саныч", "Ольга",]);
console.log(newArray);