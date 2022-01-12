function findVowels1(str) { //Первый вариант
    str = str.toLowerCase();
    let vowelsCount = 0;
    for (let i in str) {
        if (str[i] == "а" || str[i] == "у" || str[i] == "о" || str[i] == "и" || str[i] == "э" || str[i] == "ы" || str[i] == "я" || str[i] == "ю" || str[i] == "е" || str[i] == "ё") {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
let func1 = findVowels1('Абракадабрауэ')
console.log(func1)


function findVowels2(str) {//Второй вариант
    str = str.match(/[ауоиэыяюеё]/gi);//С ипользованием regexp
    return str === null ? 0 : str.length;
}
let func2 = findVowels2('Абракадабрауэ')
console.log(func2)


const findVowels3 = str =>{//Тертий вариант
   str = str.toLowerCase();
   return Array.from(str).filter(letter => 'ауоиэыяюеё'.includes(letter)).length;
} 
let func3 = findVowels3('Абракадабрауэ');
console.log(func3)
