const time = document.querySelector('.header__time');

let count = setInterval(function(){
let date = new Date();
  time.innerHTML = date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds();
}, 1000);

const dateObj = document.querySelector('.header__date');
const date = new Date();
dateObj.innerHTML = date.getDate() + '/' + (Number(date.getMonth()) + 1) + '/' + date.getFullYear();


// date.getMonth()   date.getFullYear() Number