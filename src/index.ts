import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal } from 'bootstrap';
import fontawsome from './app/fontawsome';
import photoSwiper from './app/photoSwiper';

import flatpickr from "flatpickr";
require("flatpickr/dist/themes/light.css");


import Swiper, { Pagination, Navigation, Controller, Thumbs, Lazy, Autoplay, Zoom } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/free-mode';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import "./css/main.sass"
import { init as initParallaxScrolling } from "./app/ParallaxScrolling"
import Pager from "./app/Pager"


fontawsome();
photoSwiper()



initParallaxScrolling(document.querySelectorAll("div.PS") as NodeList)

//datetimePicker
flatpickr(".datetimePicker", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",

});


// init Swiper:
const swiperBanner = new Swiper('.mainBanner .swiper', {
    modules: [Pagination],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
    },
    lazy: true,
});


//對應contentSwiper.sass
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


type gallaryObj = {
    name: string
    autoplay: boolean
    centered: boolean
    loop: boolean
    gap: number
    zoom: "prod" | "thumb"
    free: boolean
}

//gallary
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
        /*
        go.zoom == "prod" &&
            swiperProd.on('doubleTap', function () {
                gallery.classList.add('on')
            });

        go.zoom == "thumb" &&
            swiperProdThumb.on('doubleTap', function () {
                gallery.classList.add('on')
            });

        close.addEventListener("click", (event: Event) => {
            gallery.classList.remove('on')
        })*/
    }
}

initGallery({ name: '.gallery.main', autoplay: false, centered: true, loop: true, gap: 20, zoom: "thumb", free: true })
initGallery({ name: '.gallery.sub', autoplay: false, centered: true, loop: true, gap: 0, zoom: "thumb", free: true })
initGallery({ name: '.gallery.prod', autoplay: false, centered: false, loop: false, gap: 0, zoom: "prod", free: false })
//preload imagee
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
document.querySelectorAll(".mainMenu .left li a").forEach(item => {
    item.addEventListener("click", (event: Event) => {
        document.querySelectorAll(".mainMenu .left li a").forEach(item => {
            item.classList.remove('on')
        })
        let _t: HTMLElement = event.currentTarget as HTMLElement;
        _t.classList.toggle('on')
    })
})


//img loader
document.querySelectorAll(".cards .f-box").forEach(img=>{
    let imgDom:HTMLElement = img as HTMLElement
    const styleReg= /\(\"(.+)\"\)/i
    if(imgDom != null || imgDom !=undefined){
        const imgPath:string = imgDom.style.backgroundImage.match(styleReg)?.[1] as string
        let _img  = new Image()
        _img.src = imgPath
        _img.addEventListener("load",()=>{
            imgDom.classList.add("complete")
        })
    }
})

//Pager System
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