'use strict'
let weight = 4;
let recommendation;
if(weight < 4)
{
    recommendation = 'Пора перекусить';
    console.log(recommendation);
}
if(weight >= 4 && weight < 5.5)
{
    recommendation = 'Вес в норме';
    console.log(recommendation);
}
if(weight > 5.5)
{
    recommendation = 'Пора на тренировку';
    console.log(recommendation);
}