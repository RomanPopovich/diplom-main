window.addEventListener('DOMContentLoaded', ()=>{
    // tabsMenu
const tagA = document.querySelectorAll('.tab-new'),
      tabsContent = document.querySelectorAll('.tab-content-new'),
      tabsParent = document.querySelector('.hero-menu_header'),
      tagLi = document.querySelectorAll('.tag-li-new');
function hideTabContent(){
    tabsContent.forEach(item=>{
                item.style.display = 'none';
    });
    tagA.forEach(item=>{
                item.classList.remove('current-new');
    });
}
function showTabContent(i = 0){
       tabsContent[i].style.display = 'block';
       tagA[i].classList.add('current-new');
}  
hideTabContent();
showTabContent();
tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        if(target && target.classList.contains('tab-new')){
            tagA.forEach((item, i)=>{
                  if(target == item){
                    hideTabContent();
                    showTabContent(i);
                  }
            });
        }
                     
});
tagLi.forEach((item)=>{
      item.addEventListener('click', ()=>{
           let current = item;
           tagLi.forEach((item)=>{
                 item.classList.remove('current');
           });
           current.classList.add('current');
           });           
});
// slides
const slidesTable = document.querySelectorAll('.book-a-table'),
      faCaretLeft = document.querySelector('.fa-caret-left'),
      faCaretRight = document.querySelector('.fa-caret-right'),
      slidesReviews = document.querySelectorAll('.slides-reviews'),
      tcButtonNext = document.querySelector('.tc-button-next'),
      tcButtonPrev = document.querySelector('.tc-button-prev');
      
let slidesIndexTable = 1;
let slidesIndexReviews = 1;
showSlidesTable(slidesIndexTable);
showSlidesReviews(slidesIndexReviews);
// 
function showSlidesTable(n){
      if(n>slidesTable.length){
        slidesIndexTable = 1;
      }
      if(n<1){
        slidesIndexTable = slidesTable.length;
      }
      slidesTable.forEach(item => item.style.display = 'none');
      slidesTable[slidesIndexTable - 1].style.display = 'block';
     
}
function faCaretTable(n){
      showSlidesTable(slidesIndexTable +=n);
}
faCaretLeft.addEventListener('click', ()=>{
    faCaretTable(-1);
});
faCaretRight.addEventListener('click', ()=>{
    faCaretTable(1);
});
// 
function showSlidesReviews(n){
      if(n>slidesReviews.length){
        slidesIndexReviews = 1;
      }
      if(n<1){
        slidesIndexReviews = slidesReviews.length;   
      }
      slidesReviews.forEach(item => item.style.display = 'none');
      slidesReviews[slidesIndexReviews - 1].style.display = 'block';
}
function faCaretReviews(n){
      showSlidesReviews(slidesIndexReviews +=n);
}

tcButtonPrev.addEventListener('click', ()=>{
    faCaretReviews(-1);
});
tcButtonNext.addEventListener('click', ()=>{
    faCaretReviews(1);
});
// timer
// const timeEnd = '2023-12-09';
// function getTimeRemainig(endtime){
//     const t = Date.parse(endtime) - Date.parse(new Date()),
//           days = Math.floor(t / (1000 * 60 * 60 * 24)),
//           hours = Math.floor(t / (1000* 60 * 60)% 24),
//           minutes = Math.floor((t / 1000 / 60) % 60),
//           seconds = Math.floor((t / 1000) % 60);
//     return{
//         'total'   : t,
//         'days'    : days,
//         'hours'   : hours,
//         'minutes' : minutes,
//         'seconds' : seconds
//     };      
// }
// function setClock(selector, endtime){
//          const timer = document.querySelector(selector),
//                days = document.querySelector('#days'),
//                hours = document.querySelector('#hours'),
//                minutes = document.querySelector('#minutes'),
//                seconds = document.querySelector('#seconds'),
//                timeInterval = setInterval(updateClock, 1000);
//          function updateClock(){
//                const t = getTimeRemainig(endtime);
//                days.innerHTML = t.days;
//                hours.innerHTML = t.hours;
//                minutes.innerHTML = t.minutes;
//                seconds.innerHTML = t.seconds;
//          }      
// }
// setClock('.timer', timeEnd);
});