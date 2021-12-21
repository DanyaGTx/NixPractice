'use strict'
let num1 = prompt("Введите число 1");
let num2 = prompt("Введите число 2");
let res = 0;
if(num1 > num2)
{
    res = Number(num1) + Number(num2);
    alert(res);
}
if(num1 < num2)
{
    res = num1 * num2;
    alert(res);
}
if(num1 === num2)
{
    alert("Числа одинаковые");
}