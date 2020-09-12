// отображение порядкового номера отзыва
const reviewNumber = document.querySelectorAll('.reviews__number');
let numbers = [];

for (i = 0; i < reviewNumber.length; i++) {
  numbers[i] = reviewNumber[i];
};

numbers.forEach(number => number.textContent = '00' + (numbers.indexOf(number) + 1));

// мобильное меню
const burgerBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileMenu = document.querySelector('.mobile');

burgerBtn.addEventListener('click', function(){
  // mobileMenu.classList.remove('hidden');
  mobileMenu.classList.add('transform-mobile');
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', function(){
  // mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('transform-mobile');
  document.body.classList.remove('no-scroll');
});

// плавный скролл
const navLinks = document.querySelectorAll('[href^="#"]');
let speed = 0.3;

navLinks.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(e){
  e.preventDefault();

  if (mobileMenu.classList.contains('transform-mobile')) {
    mobileMenu.classList.remove('transform-mobile');
    document.body.classList.remove('no-scroll');
  };

  let w = window.pageYOffset;
  let hash = this.href.replace(/[^#]*(.*)/, '$1');
  let t = document.querySelector(hash).getBoundingClientRect().top;
  let start = null;
  requestAnimationFrame(step);
  function step(time) {
    if (start === null) start = time;
    let progress = time - start;
    let r = (t < 0 ? Math.max(w - progress/speed, w + t) : Math.min(w + progress/speed, w + t));
    window.scrollTo(0,r);
    if (r != w + t) {
      requestAnimationFrame(step)
    } else {
        location.hash = hash;
      };
  };
};

// карусель отзывов
// const leftBtn = document.querySelector('.left-btn');
// const rightBtn = document.querySelector('.right-btn');
// const reviewsList = document.querySelector('.reviews__list');
// const reviewsCard = document.querySelector('.reviews__card');

// const cardWidth = reviewsCard.scrollWidth;
// console.log(cardWidth);
// console.log(reviewsList.scrollWidth);
// console.log(reviewsList.clientWidth);
// console.log(reviewsList.scrollLeft);

// leftBtn.addEventListener('click', function(){
//   let x = reviewsList.scrollLeft;
//   let i = 10;
//   let int = setInterval(function() {
//     reviewsList.scrollTo(x, 0);
//     x -= i;
//     i += 10;
//     if (i >= 640) clearInterval(int);
//   }, 50);
//   console.log(x);
//   console.log(reviewsList.scrollLeft);
// });

// rightBtn.addEventListener('click', function(){
//   let x = reviewsList.scrollLeft;
//   let i = 10;
//   let int = setInterval(function() {
//     reviewsList.scrollTo(x, 0);
//     x += i;
//     i += 10;
//     if (i >= 640) clearInterval(int);
//   }, 50);
// });

