'use strict'
let arr = ['Саша', 'Петя', 'Оксана'];

/*
arr = ['Оксанa', 'Олег', 'Саша'];//первый способ
console.log(arr);
*/
//Второй способ
arr[0] = arr[2];
arr[1] = 'Олег';
arr[2] = 'Саша';
console.log(arr);