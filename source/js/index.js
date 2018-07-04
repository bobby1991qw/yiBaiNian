import Swiper from 'swiper';
import './module/header';


new Swiper('.swiper-box>.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true
});