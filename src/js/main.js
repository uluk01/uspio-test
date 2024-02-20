import Swiper from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Autoplay } from 'swiper/modules';
import { Fancybox } from '@fancyapps/ui';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  modules: [Autoplay],
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 1,
  autoHeight: true,
  breakpoints: {
    720: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1140: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

Fancybox.bind('[data-fancybox]');

const form = document.querySelector('.subscribe__form');
const formButton = form.querySelector('.subscribe__button');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch('static/subscribe.json')
    .then((response) => response.json())
    .then((json) => {
      formButton.classList.add('is-success');
      formButton.innerHTML = json.response;
    })
    .catch((error) => {
      formButton.classList.add('is-error');
      console.error(error);
    })
    .finally(() => {
      form.reset();
    });
});
