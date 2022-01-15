'use strict'
function timeCorrect(time){
   let i = 0;
   let min = time[3] + time[4]
   let sec = time[6] + time[7]
   if(min > 59){
      i += 1;
      min = min - 60;
      if(min < 10){
         min = '0' + min;
      }
   }
   if(sec > 59){
      min = Number(min) + 1; 
      sec = sec - 60;
      if(min < 10){
         min = '0' + min;
      }
      if(sec < 10){
         sec = '0' + sec;
      }
   }
   let hours = Number(time[0] + time[1]) + i; 
   if(min < 1){
      min = '0' + min;
   }
   if(hours >= 24){
      do{
         if(hours >= 24){
            hours = hours - 24;
         }
      }while(hours >= 24)
   }
   if(hours < 10){
      hours = '0' + hours;
   }

   let res = hours + ':' + min + ':' + sec;
   return res;
}
let func = timeCorrect('12:10:70');
console.log(func)