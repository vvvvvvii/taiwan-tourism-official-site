import { createApp } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination } from 'swiper/core';

import App from './App.vue';
import router from './router';

SwiperCore.use([Pagination]);

const app = createApp(App);
app.use(router).component('Swiper', Swiper).component('SwiperSlide', SwiperSlide).mount('#app');
