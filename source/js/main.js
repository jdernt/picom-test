// карусель отзывов
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const reviewsList = document.querySelector('.reviews__list');
const reviewsCard = document.querySelector('.reviews__card');

const cardWidth = reviewsCard.scrollWidth;
console.log(cardWidth);
console.log(reviewsList.scrollWidth);
console.log(reviewsList.clientWidth);
console.log(reviewsList.scrollLeft);

leftBtn.addEventListener('click', function(){
  let x = reviewsList.scrollLeft;
  let i = 10;
  let int = setInterval(function() {
    reviewsList.scrollTo(x, 0);
    x -= i;
    i += 10;
    if (i >= 640) clearInterval(int);
  }, 50);
  console.log(x);
  console.log(reviewsList.scrollLeft);
});

rightBtn.addEventListener('click', function(){
  let x = reviewsList.scrollLeft;
  let i = 10;
  let int = setInterval(function() {
    reviewsList.scrollTo(x, 0);
    x += i;
    i += 10;
    if (i >= 640) clearInterval(int);
  }, 50);
});

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

burgerBtn.addEventListener('click', function(){
  document.querySelector('.mobile').classList.remove('hidden')
})

closeBtn.addEventListener('click', function(){
  document.querySelector('.mobile').classList.add('hidden')
})

