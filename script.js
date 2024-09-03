const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navLinks = document?.querySelectorAll('.header__nav .nav__link');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;
// document.querySelector(':root').style.setProperti('--header-height', '${headerHeight}px');

burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('header__nav--visible');
});

navLinks.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('header__nav--visible');
    });
});

const swiper = new Swiper('.swiper-conteiner', {
    loop: true,

    autoplay: {
        delay: 5000,
    },
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    a11y: {
        paginationBulletMessage: 'Переход к следующему слайду'
      },

});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabItem = document.querySelectorAll('.work__item');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) {
            btn.classList.remove('tabs-nav__btn--active')
        });
        e.currentTarget.classList.add('tabs-nav__btn--active');

        tabItem.forEach(function(el) {
            el.classList.remove('work__item--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('work__item--active')
    });
});


// let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
// let tabsItem = document.querySelectorAll('.work__item');

// tabsBtn.forEach(function(element){
//   element.addEventListener('click', function(e){
//     const path = e.currentTarget.dataset.path;
 
//     tabsBtn.forEach(function(btn){btn.classList.remove('tabs-nav__btn--active')});
//     e.currentTarget.classList.add('tabs-nav__btn--active');
 
//     tabsItem.forEach(function(element){ element.classList.remove('work__item--active')});
//     document.querySelector(`[data-target="${path}"]`).classList.add('work__item--active');
//   });
// });

// document.addEventListener('DOMContentLoaded', () => {
// 	const accordions = document.querySelectorAll('.accordion');

// 	accordions.forEach(el => {
// 		el.addEventListener('click', (e) => {
// 			const self = e.currentTarget;
// 			const control = self.querySelector('.accordion__control');
// 			const content = self.querySelector('.accordion__content');

// 			self.classList.toggle('open');

// 			// если открыт аккордеон
// 			if (self.classList.contains('open')) {
// 				control.setAttribute('aria-expanded', true);
// 				content.setAttribute('aria-hidden', false);
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 			} else {
// 				control.setAttribute('aria-expanded', false);
// 				content.setAttribute('aria-hidden', true);
// 				content.style.maxHeight = null;
// 			}
// 		});
// 	});
// });

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    let prevAccordion = null;

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.accordion__control');
            const content = self.querySelector('.accordion__content');

            if (prevAccordion && prevAccordion !== self) {
                prevAccordion.classList.remove('open');
                const prevControl = prevAccordion.querySelector('.accordion__control');
                const prevContent = prevAccordion.querySelector('.accordion__content');
                prevControl.setAttribute('aria-expanded', false);
                prevContent.setAttribute('aria-hidden', true);
                prevContent.style.maxHeight = null;
            }

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }

            prevAccordion = self;
        });
    });
});


let searchBtn = document.querySelector('.header__btn');
let searchBlock = document.querySelector('.search');
let closedBtn = document.querySelector('.search__btn-closed');

searchBtn.addEventListener('click', 
function() {
    closedBtn.classList.remove('search__btn-closed--active');
    searchBlock.classList.toggle('search--active');
    body.classList.toggle('stop-scroll');
});

closedBtn.addEventListener('click', 
function() {
    closedBtn.classList.toggle('search__btn-closed--active')
    searchBlock.classList.remove('search--active')
    body.classList.remove('stop-scroll');
});