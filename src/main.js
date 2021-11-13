import { createApp } from 'vue';

import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

SwiperCore.use([Pagination]);

const app = createApp(App);
app
  .use(router)
  .use(VueAxios, axios)
  .component('Swiper', Swiper)
  .component('SwiperSlide', SwiperSlide)
  .mount('#app');
