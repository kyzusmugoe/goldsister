import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import fontawsome from './fontawsome';
import photoSwiper from './photoSwiper';

import flatpickr from "flatpickr";
require("flatpickr/dist/themes/light.css");

//import Swiper, { Pagination, Navigation, Controller, Thumbs, Lazy, Autoplay, EffectFade } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import "swiper/css/effect-fade";
import "../css/main.sass"
import { init as initParallaxScrolling } from "./ParallaxScrolling"
import Pager from "./Pager"

fontawsome();
photoSwiper()
//initParallaxScrolling(document.querySelectorAll("div.PS") as NodeList)

//datetimePicker
flatpickr(".datetimePicker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
});



//主BANNER Swiper
/*
const swiperBanner = new Swiper('.mainBanner .swiper', {
    modules: [Pagination, Lazy, Autoplay, EffectFade],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    lazy: true,
    loop: true,
    speed:  1000,
    effect: "fade",
    autoplay: {
        delay: 6000,
        disableOnInteraction: false
    }
});
*/


//針對pagination微調位置
/*
document.addEventListener("scroll", () => {
    if (document.querySelector(".swiper-pagination")) {
        let _p: HTMLDivElement = document.querySelector(".swiper-pagination") as HTMLDivElement
        _p.style.transform = `translateY(-${window.pageYOffset * 0.1}px)`;
    }
})*/


//對應contentSwiper.sass
/*
const swiperShop = new Swiper('.swiper.shop, .swiper.event', {
    modules: [Lazy, Pagination],
    slidesPerView: 'auto',

    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: ".swiper-scrollbar"
    },
    spaceBetween: 0,
    breakpoints: {
        // when window width is >= 320px
        414: {
            spaceBetween: 20
        }
    },

});
*/
//gallary
/*
type gallaryObj = {
    name: string
    autoplay: boolean
    centered: boolean
    loop: boolean
    gap: number
    zoom: "prod" | "thumb"
    free: boolean
}



const initGallery = (go: gallaryObj) => {
    if (document.querySelector(go.name)) {
        const root: string = go.name
        const gallery: HTMLElement = document.querySelector(root) as HTMLElement
        const close: HTMLElement = gallery.querySelector(".close") as HTMLElement
        
        const swiperProdThumb: Swiper = new Swiper(root + ' .swiperProdThumb', {  // Optional parameters
            modules: [Lazy, Autoplay],
            //autoplay: go.autoplay,
            slidesPerView: 'auto',
            spaceBetween: go.gap,
            lazy: true,
            centeredSlides: go.centered,
            loop: go.loop,
            freeMode: go.free
        });

        const swiperProd = new Swiper(root + ' .swiperProd', {  // Optional parameters
            modules: [Pagination, Thumbs, Lazy],
            slidesPerView: "auto",
            watchSlidesProgress: true,
            lazy: true,
            thumbs: {
                swiper: swiperProdThumb
            }
        });
    }
}

initGallery({ name: '.gallery.main', autoplay: false, centered: true, loop: true, gap: 20, zoom: "thumb", free: true })
initGallery({ name: '.gallery.sub', autoplay: false, centered: true, loop: true, gap: 0, zoom: "thumb", free: true })
initGallery({ name: '.gallery.prod', autoplay: false, centered: false, loop: false, gap: 0, zoom: "prod", free: false })
*/
//preload imagee

/*
if (document.querySelector(".preloadBar")) {
    const preloadBar = document.querySelector(".preloadBar") as HTMLDivElement
    const imgNList = document.querySelectorAll("img.preload");
    let loadedCount = 0;
    imgNList.forEach(item => {
        let _t: HTMLImageElement = item as HTMLImageElement;
        if (_t != undefined) {
            const img = new Image()
            img.src = _t.src
            img.addEventListener("load", () => {
                loadedCount++;
                if (loadedCount == imgNList.length) {
                    preloadBar != null &&
                        preloadBar.classList.add("off")
                }
            })
        }
    })
}

//main_menu
/*
document.querySelectorAll(".mainMenu .left li a").forEach(item => {
    item.addEventListener("click", (event: Event) => {
        document.querySelectorAll(".mainMenu .left li a").forEach(item => {
            item.classList.remove('on')
        })
        let _t: HTMLElement = event.currentTarget as HTMLElement;
        _t.classList.toggle('on')
    })
})
//img loader bg image
document.querySelectorAll(`
    .gridBox div,
    .cards .f-box
`).forEach(img => {
    let imgDom: HTMLElement = img as HTMLElement
    const styleReg = /\(\"(.+)\"\)/i
    if (imgDom != null || imgDom != undefined) {
        const imgPath: string = imgDom.style.backgroundImage.match(styleReg)?.[1] as string
        const src = imgDom.style.backgroundImage
        imgDom.style.backgroundImage = "";
        const loading = document.createElement('div')
        loading.classList.add('spinner-border')
        imgDom.appendChild(loading)

        let _img = new Image()
        _img.src = imgPath
        _img.addEventListener("load", () => {
            imgDom.style.backgroundImage = src;
            imgDom.classList.add("complete")
            imgDom.removeChild(loading)
        })
    }
})

//img loader img tag

document.querySelectorAll(`
    .imgBox, .foodImg,    
    .mainBanner .swiper-slide,
    .gallery.prod .swiper-slide,
    .shop.swiper .f-box,
    .event.swiper .f-box,
    .sideBanner .content,
    .block-2-3 .content,
    .newsImg
`).forEach(box => {
    let container: HTMLElement = box as HTMLElement
    //const styleReg= /\(\"(.+)\"\)/i
    if (container != null || container != undefined) {
        const imgDom: HTMLImageElement = container.querySelector('img') as HTMLImageElement

        const loading = document.createElement('div')
        loading.classList.add('spinner-border')

        container.appendChild(loading)
        imgDom.style.display = "none"
        let _img = new Image()
        _img.src = imgDom.src
        _img.addEventListener("load", () => {
            imgDom.style.display = "block"
            imgDom.classList.add("complete")
            container.removeChild(loading)
        })
    }
})*/

//Pager System
/*
const menus: menuObj[] = [
    { btn: ".m_menu", menu: ".mobile", group: [] },
    { btn: ".login_btn", menu: ".loginMenu", group: [".login_btn", ".user_btn"] },
    { btn: ".u_btn", menu: ".userMenu", group: [".login_btn", ".user_btn"] },
    //{ btn: ".login3_btn", menu: ".loginMenu" },
    { btn: ".k_btn", menu: ".kartMenu", group: [] },
    { btn: ".reg_btn", menu: ".registMenu", group: [".login_btn", ".user_btn"] },
    { btn: ".fg_btn", menu: ".forgetMenu", group: [".login_btn", ".user_btn"] },
    { btn: ".user_btn", menu: ".userMenu", group: [".login_btn", ".user_btn"] },
]
Pager(menus)

//mobile_sub_menu
document.querySelectorAll(".mobile .sub").forEach(item => {
    item.addEventListener("click", (event: Event) => {
        let _t: HTMLElement = event.currentTarget as HTMLElement;
        _t.classList.toggle('on')
    })
})
*/