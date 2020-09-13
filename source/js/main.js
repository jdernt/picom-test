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
const mobileBg = document.querySelector('.dark-bg');

burgerBtn.addEventListener('click', function(){
  mobileMenu.classList.add('transform-mobile');
  mobileBg.classList.add('bg-visible');
  document.body.classList.add('no-scroll');
});

closeBtn.addEventListener('click', function(){
  mobileMenu.classList.remove('transform-mobile');
  mobileBg.classList.remove('bg-visible');
  document.body.classList.remove('no-scroll');
});

// плавный скролл
const navLinks = document.querySelectorAll('[href^="#"]');
let speed = 0.2;

navLinks.forEach(link => link.addEventListener('click', smoothScroll));

function smoothScroll(e){
  e.preventDefault();

  if (mobileMenu.classList.contains('transform-mobile')) {
    mobileMenu.classList.remove('transform-mobile');
    mobileBg.classList.remove('bg-visible');
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
// const cards = document.querySelectorAll('.reviews__card');

// const cardWidth = reviewsCard.scrollWidth;
// const visibleListWidth = reviewsList.clientWidth;
// const sumListWidth = reviewsList.scrollWidth;

// let center = visibleListWidth / 2;

// let cardCoords = {};
// let listCoords = {};

// function getCoords(elem) {
//   const card = elem.getBoundingClientRect();
//   let listPosition = reviewsList.getBoundingClientRect();

//   listCoords = {
//     top: listPosition.top + pageYOffset,
//     left: listPosition.left + pageXOffset
//   };

//   cardCoords = {
//     top: card.top + pageYOffset,
//     left: card.left + pageXOffset - listCoords.left + card.width / 2
//   };
// };

// function transformList(element) {
//   let transform = reviewsList.style.transform;
//   let transformNum = transform.match(/\d+/);
//   let number;
//   let anotherCard;

//   getCoords(cards[element]);

//   if (cards[count+1] === undefined) {
//     let newTransformNum = sumListWidth - visibleListWidth;
//     reviewsList.style.transform = 'translateX( -' + newTransformNum + 'px)';
//   } else {
//     count++;

//     if (transformNum !== null) {
//       for (i = 0; i < transformNum.length; i++) {
//         number = Number(transformNum[i]);
//         cardCoords.left = cardCoords.left - Math.abs(number);
//         anotherCard = cardCoords.left - center;
//       }
//       let newTransformNum = number + anotherCard;
//       if (Math.abs(newTransformNum) < sumListWidth) {
//         reviewsList.style.transform = 'translateX( -' + newTransformNum + 'px)';
//       }
//     } else {
//       anotherCard = cardCoords.left - center;
//       reviewsList.style.transform = 'translateX( -' + anotherCard + 'px)';
//     }
//   };
// }

// leftBtn.addEventListener('click', function(){
//   // let x = reviewsList.scrollLeft;
//   // let i = 10;
//   // let int = setInterval(function() {
//   //   reviewsList.scrollTo(x, 0);
//   //   x -= i;
//   //   i += 10;
//   //   if (i >= 640) clearInterval(int);
//   // }, 50);
//   let anotherCard = cardWidth * 2.5;
//   anotherCard = anotherCard - center;
//   let transform = reviewsList.style.transform;
//   let transformNum = transform.match(/\d+/);
//   let number;
//   if (transformNum !== null) {
//     for (i = 0; i < transformNum.length; i++) {
//       number = Number(transformNum[i]);
//     }
//     console.log(number);
//     let sumNum = number + anotherCard;
//     if (Math.abs(sumNum) < sumListWidth) {
//       reviewsList.style.transform = 'translateX(' + sumNum + 'px)';
//     }
//   }
// });

// let count = 2;
// let one = 1;

// rightBtn.addEventListener('click', function(){
//   if (visibleListWidth > (cardWidth * 2)) {
//     transformList(count);
//   } else {
//     transformList(one);
//   }
// });

