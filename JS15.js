'use strict'
function maxDiff(arr)
{
    let max = arr[0];
    let min = arr[0];
    let difference;
    if(arr.length <= 1)
    {
        return 0;
    }
    else
    {
        for(let i = 0;i<arr.length;i++)
        {
            if(max < arr[i])
            {
                max = arr[i];
            }
            if(min > arr[i])
            {
                min = arr[i]
            }
        }
    }
    difference = max - min;
    return difference;
}
let func = maxDiff([-0, 1, 2, -3, 4, 5, -6]);
console.log(func);
