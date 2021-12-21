'use strict'
//Главное отличие alert от console.log 
//alert()преобразует переданный ему объект в строку, используя метод toString()
//а console.log не ограничивается отображением простой строки и может позволить вам взаимодействовать с переданным ему объектом
let camelCase = 0;
let snake_case = 1;
let PascalCase = 2;
alert(camelCase);
alert(snake_case);
alert(PascalCase);
console.log(camelCase,snake_case,PascalCase);
