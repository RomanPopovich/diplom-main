window.addEventListener('DOMContentLoaded', ()=>{
// timer
const timeEnd = '2023-12-09';
function getTimeRemainig(endtime){
    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000* 60 * 60)% 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);
    return{
        'total'   : t,
        'days'    : days,
        'hours'   : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };      
}
function setClock(selector, endtime){
         const timer = document.querySelector(selector),
               days = document.querySelector('#days'),
               hours = document.querySelector('#hours'),
               minutes = document.querySelector('#minutes'),
               seconds = document.querySelector('#seconds'),
               timeInterval = setInterval(updateClock, 1000);
         function updateClock(){
               const t = getTimeRemainig(endtime);
               days.innerHTML = t.days;
               hours.innerHTML = t.hours;
               minutes.innerHTML = t.minutes;
               seconds.innerHTML = t.seconds;
         }      
}
setClock('.timer', timeEnd);
});