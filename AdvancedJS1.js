'use strict'
function solve(equation){
    let numbers = ['0','1','2','3','4','5','6','7','8','9']
    let res = '';
    let newArr = [];
    for(let i = equation.length - 1; i>=0;i--){//Записываем всё уравнение задом наперед
        res += equation[i]
    }
    let currentNum = '';
    for(let i of res){
        if(numbers.includes(i)){//является ли символ цифрой (проверяем,чтобы записывать в новый массив)
            currentNum += i;//Записываем текущее значение в переменную,чтобы потом заменить его на нормальное(перевернутое)
            newArr.push(i);//записываем число в массив, чтобы потом перевенуть его
        }
    }
    newArr.reverse();//переворачиваем массив
    let num = '';
    for(let i of newArr){
        num+=i;//записываем перевернутые значения в переменную
    }
    return res.split(currentNum).join(num)//заменяем прошлое значение на новое (перевернутое) и добавляем остальную часть
}
let func = solve("y/b*100")
console.log(func)
