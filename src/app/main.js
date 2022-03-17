//Pager System

//彈跳視窗的控制
const menus = [
    { btn: ".m_menu", menu: ".mobile", group: [] },//手機板選單
    { btn: ".login_btn", menu: ".loginMenu", group: [".login_btn", ".user_btn"] },
    { btn: ".u_btn", menu: ".userMenu", group: [".login_btn", ".user_btn"] },
    { btn: ".k_btn", menu: ".kartMenu", group: [] },
    { btn: ".reg_btn", menu: ".registMenu", group: [".login_btn", ".user_btn"] },
    { btn: ".fg_btn", menu: ".forgetMenu", group: [".login_btn", ".user_btn"] },
    { btn: ".user_btn", menu: ".userMenu", group: [".login_btn", ".user_btn"] },
]



const init = () => {


    //視差
    initParallaxScrolling(document.querySelectorAll("div.PS"))

    //針對pagination微調位置
    document.addEventListener("scroll", () => {
        if (document.querySelector(".swiper-pagination")) {
            let _p = document.querySelector(".swiper-pagination")
            _p.style.transform = `translateY(-${window.pageYOffset * 0.1}px)`;
        }
    })

    //Gallery
    initGallery({ name: '.gallery.main', autoplay: false, centered: true, loop: true, gap: 20, zoom: "thumb", free: true })
    initGallery({ name: '.gallery.sub', autoplay: false, centered: true, loop: true, gap: 0, zoom: "thumb", free: true })
    initGallery({ name: '.gallery.prod', autoplay: false, centered: false, loop: false, gap: 0, zoom: "prod", free: false })

    //main_menu 主選單控制
    document.querySelectorAll(".mainMenu .left li a").forEach(item => {
        item.addEventListener("click", (event) => {
            document.querySelectorAll(".mainMenu .left li a").forEach(item => {
                item.classList.remove('on')
            })
            let _t = event.currentTarget;
            _t.classList.toggle('on')
        })
    })

    //img loader bg image
    document.querySelectorAll(`
        .gridBox div,
        .cards .f-box
    `).forEach(img => {
        let imgDom = img
        const styleReg = /\(\"(.+)\"\)/i
        if (imgDom != null || imgDom != undefined) {
            const imgPath = imgDom.style.backgroundImage.match(styleReg)?.[1]
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
        let container = box
        //const styleReg= /\(\"(.+)\"\)/i
        if (container != null || container != undefined) {
            const imgDom = container.querySelector('img')
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
    })
    //mobile選單內的子選單
    document.querySelectorAll(".mobile .sub").forEach(item => {
        item.addEventListener("click", (event) => {
            let _t = event.currentTarget;
            _t.classList.toggle('on')
        })
    })



    //彈跳視窗的render
    menus.map((item, index) => {

        const menu = document.querySelector(item.menu) ? document.querySelector(item.menu) : null
        let _t;
        document.querySelectorAll(item.btn).forEach(btn => {
            btn.addEventListener("click", (event) => {
                _t = btn
                //關閉所有menu以及按鈕
                menus.map((MO) => {
                    const _m = document.querySelector(MO.menu)
                    const _b = document.querySelector(MO.btn)
                    if (_m) {
                        _m.classList.remove('on')

                        if (_b) {
                            if (_t != _b) {
                                _b.classList.remove('on')
                            } else {
                                _t.classList.toggle('on')
                            }
                        }
                    }
                })
                //group
                let gbtn
                item.group.map((btnName) => {
                    if (document.querySelector(btnName)) {
                        gbtn = document.querySelector(btnName)
                    }
                })

                if (gbtn != undefined) {
                    if (_t == gbtn) {
                        if (!gbtn.classList.contains("on")) {

                            console.log("off")
                            menu?.classList.remove('on')
                            menu?.classList.add('off')
                            _t.classList.remove('on')
                            _t.classList.add('off')

                            //group
                            item.group.map((btnName) => {
                                const btn = document.querySelector(btnName)
                                if (btn) {
                                    btn.classList.remove("on")
                                    btn.classList.add("off")
                                } else {
                                    console.log("group:close 找不到" + btnName)
                                }
                            })
                            return
                        }
                    }

                    gbtn.classList.add('on')
                    gbtn.classList.remove('off')
                    menu?.classList.add('on')
                    menu?.classList.remove('off')
                } else {
                    if (_t.classList.contains('on')) {
                        menu?.classList.add('on')
                        menu?.classList.remove('off')
                    } else {
                        menu?.classList.remove('on')
                        menu?.classList.add('off')
                    }
                }
            })
        })


        if (menu) {
            menu.querySelector(".close")?.addEventListener("click", (event) => {
                menu.classList.remove('on')
                menu.classList.add('off')
                _t.classList.remove('on')
                _t.classList.add('off')
                //group
                item.group.map((btnName) => {
                    const btn = document.querySelector(btnName)
                    if (btn) {
                        btn.classList.remove("on")
                        btn.classList.add("off")
                    } else {
                        console.log("group:close 找不到" + btnName)
                    }
                })
            })

            menu.addEventListener("click", (event) => {
                if (event.target == menu) {
                    menu.classList.remove('on')
                    menu.classList.add('off')
                    _t?.classList.remove('on')

                }
            })
        }
    })
}

//Gallery物件產生器
function initGallery(go) {
    if (document.querySelector(go.name)) {
        const root = go.name
        const gallery = document.querySelector(root)
        const close = gallery.querySelector(".close")

        const swiperProdThumb = new Swiper(root + ' .swiperProdThumb', {  // Optional parameters
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

//視差產生器
function initParallaxScrolling(targets) {
    if (targets) {
        window.addEventListener('scroll', (event) => {
            targets.forEach((item) => {
                if (item !== undefined) {
                    const _start = item.offsetTop - window.innerHeight
                    const _end = item.offsetTop + item.offsetHeight
                    if (window.pageYOffset > _start && window.pageYOffset < _end) {
                        const speed = item.dataset['speed'] ? item.dataset['speed'] : 1
                        const distance = item.dataset['distance'] ? item.dataset['distance'] : 100
                        const type = item.dataset['type'] ? item.dataset['type'] : "none"
                        if (window.pageYOffset * (speed * 0.1) < distance) {
                            if (type == "bg") {
                                item.style.backgroundPositionY = `calc(50% - ${((window.pageYOffset) * (speed * 0.1))}px)`
                            } else {
                                item.style.transform = `translate3d(0, ${((window.pageYOffset) * (speed * 0.1))}px, 0) `
                            }
                        }
                    }
                }
            })
        });
    }
}

document.addEventListener("domcontentloaded", init())
