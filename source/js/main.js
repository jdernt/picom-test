// отображение порядкового номера отзыва
const reviewNumber = document.querySelectorAll('.reviews__number');

Array.from(reviewNumber).map((item, idx) => item.textContent = `00${idx+1}`);

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

// input focus
const searchInput = document.querySelector('.header__input');
const searchForm = document.querySelector('.header__form');

searchInput.onfocus = function () {
  searchForm.classList.add('green-bg');
};

searchInput.onblur = function () {
  searchForm.classList.remove('green-bg');
};
