'use strict'
function func(marks,done)
{
    let mark;
    if(marks < 0 || marks > 100)
    {
        console.log('Ошбика в оценке')
    }
    else
    {
        if(marks > 90 || done > 10)
        {
            mark = 100;
            return mark;
        }
        if((marks > 75 && marks < 90) || (done >= 5 && done < 10))
        {
            mark = 90;
            return mark;
        }
        if((marks > 50 && marks < 75) && (done >= 2 && done < 5))
        {
            mark = 75;
            return mark;
        }
        if(marks < 50 || done < 2)
        {
            mark = 0;
            return mark;
        }
    }
}
console.log(func(100,12));