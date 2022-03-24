/*! For license information please see main.js.LICENSE.txt */
const menus=[{btn:".m_menu",menu:".mobile",group:[]},{btn:".login_btn",menu:".loginMenu",group:[".login_btn",".user_btn"]},{btn:".u_btn",menu:".userMenu",group:[".login_btn",".user_btn"]},{btn:".k_btn",menu:".kartMenu",group:[]},{btn:".reg_btn",menu:".registMenu",group:[".login_btn",".user_btn"]},{btn:".fg_btn",menu:".forgetMenu",group:[".login_btn",".user_btn"]},{btn:".user_btn",menu:".userMenu",group:[".login_btn",".user_btn"]}],init=()=>{initParallaxScrolling(document.querySelectorAll("div.PS")),document.addEventListener("scroll",(()=>{if(document.querySelector(".swiper-pagination")){document.querySelector(".swiper-pagination").style.transform=`translateY(-${.1*window.pageYOffset}px)`}}));new Swiper(".mainBanner .swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0},lazy:!0,loop:!0,speed:1e3,effect:"fade",autoplay:{delay:6e3,disableOnInteraction:!1}});initGallery({name:".gallery.main",autoplay:!1,centered:!0,loop:!0,gap:20,zoom:"thumb",free:!0}),initGallery({name:".gallery.sub",autoplay:!1,centered:!0,loop:!0,gap:0,zoom:"thumb",free:!0}),initGallery({name:".gallery.prod",autoplay:!1,centered:!1,loop:!1,gap:0,zoom:"prod",free:!1});new Swiper(".swiper.shop",{slidesPerView:"auto",pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"},spaceBetween:0,lazy:!0,loop:!0,speed:1e3,autoplay:{delay:6e3,disableOnInteraction:!1},breakpoints:{414:{spaceBetween:20}}}),new Swiper(".swiper.event",{slidesPerView:"auto",pagination:{el:".swiper-pagination"},scrollbar:{el:".swiper-scrollbar"},spaceBetween:0,breakpoints:{414:{spaceBetween:20}}});document.querySelectorAll(".mainMenu .left li a").forEach((e=>{e.addEventListener("click",(e=>{document.querySelectorAll(".mainMenu .left li a").forEach((e=>{e.classList.remove("on")})),e.currentTarget.classList.toggle("on")}))})),document.querySelectorAll("\n        .gridBox div,\n        .cards .f-box,\n        .imgBox, .foodImg,    \n        .mainBanner .swiper-slide,\n        .gallery.prod .swiper-slide,\n        .shop.swiper .f-box,\n        .event.swiper .f-box,\n        .sideBanner .content,\n        .block-2-3 .content,\n        .newsImg\n    ").forEach((e=>{let t=e;const n=/\(\"(.+)\"\)/i;if(null!=t||null!=t){if(t.querySelector("img")){console.log("t1");const e=t.querySelector("img"),n=document.createElement("div");n.classList.add("spinner-border"),t.appendChild(n),e.style.display="none";let o=new Image;o.src=e.src,o.addEventListener("load",(()=>{e.style.display="block",e.classList.add("complete"),t.removeChild(n)}))}if(e.style.backgroundImage.match(n)){console.log("t2");let t=e;const o=t.style.backgroundImage.match(n)?.[1],s=t.style.backgroundImage;t.style.backgroundImage="";const a=document.createElement("div");a.classList.add("spinner-border"),t.appendChild(a);let l=new Image;l.src=o,l.addEventListener("load",(()=>{t.style.backgroundImage=s,t.classList.add("complete"),t.removeChild(a)}))}}})),document.querySelectorAll(".mobile .sub").forEach((e=>{e.addEventListener("click",(e=>{e.currentTarget.classList.toggle("on")}))})),menus.map(((e,t)=>{const n=document.querySelector(e.menu)?document.querySelector(e.menu):null;let o;document.querySelectorAll(e.btn).forEach((t=>{t.addEventListener("click",(s=>{let a;if(o=t,menus.map((e=>{const t=document.querySelector(e.menu),n=document.querySelector(e.btn);t&&(t.classList.remove("on"),n&&(o!=n?n.classList.remove("on"):o.classList.toggle("on")))})),e.group.map((e=>{document.querySelector(e)&&(a=document.querySelector(e))})),null!=a){if(o==a&&!a.classList.contains("on"))return console.log("off"),n?.classList.remove("on"),n?.classList.add("off"),o.classList.remove("on"),o.classList.add("off"),void e.group.map((e=>{const t=document.querySelector(e);t?(t.classList.remove("on"),t.classList.add("off")):console.log("group:close 找不到"+e)}));a.classList.add("on"),a.classList.remove("off"),n?.classList.add("on"),n?.classList.remove("off")}else o.classList.contains("on")?(n?.classList.add("on"),n?.classList.remove("off")):(n?.classList.remove("on"),n?.classList.add("off"))}))})),n&&(n.querySelector(".close")?.addEventListener("click",(t=>{n.classList.remove("on"),n.classList.add("off"),o.classList.remove("on"),o.classList.add("off"),e.group.map((e=>{const t=document.querySelector(e);t?(t.classList.remove("on"),t.classList.add("off")):console.log("group:close 找不到"+e)}))})),n.addEventListener("click",(e=>{e.target==n&&(n.classList.remove("on"),n.classList.add("off"),o?.classList.remove("on"))})))}))};function initGallery(e){if(document.querySelector(e.name)){const t=e.name,n=(document.querySelector(t).querySelector(".close"),new Swiper(t+" .swiperProdThumb",{autoplay:e.autoplay,slidesPerView:"auto",spaceBetween:e.gap,lazy:!0,centeredSlides:e.centered,loop:e.loop,freeMode:e.free}));new Swiper(t+" .swiperProd",{slidesPerView:"auto",watchSlidesProgress:!0,lazy:!0,thumbs:{swiper:n}})}}function initParallaxScrolling(e){e&&window.addEventListener("scroll",(t=>{e.forEach((e=>{if(void 0!==e){const t=e.offsetTop-window.innerHeight,n=e.offsetTop+e.offsetHeight;if(window.pageYOffset>t&&window.pageYOffset<n){const t=e.dataset.speed?e.dataset.speed:1,n=e.dataset.distance?e.dataset.distance:100,o=e.dataset.type?e.dataset.type:"none";window.pageYOffset*(.1*t)<n&&("bg"==o?e.style.backgroundPositionY=`calc(50% - ${window.pageYOffset*(.1*t)}px)`:e.style.transform=`translate3d(0, ${window.pageYOffset*(.1*t)}px, 0) `)}}}))}))}document.addEventListener("domcontentloaded",init());