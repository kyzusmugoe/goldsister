import 'photoswipe/src/css/main.scss'
import 'photoswipe/src/css/default-skin/default-skin.scss'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import PhotoSwipe from 'photoswipe'
import { init } from './ParallaxScrolling';


type ImgProp = {
    src: string
    w: number
    h: number
    rect: DOMRect
}

let cur: number = 0;
let total: number = 0;
let items: ImgProp[] = [];

const openPhotoSwipe = (imgProp: ImgProp) => {
    var pswpElement: HTMLElement = document.querySelectorAll('.pswp')[0] as HTMLElement;
    // build items array    
    var items = [
        {
            src: imgProp.src,
            w: imgProp.w,
            h: imgProp.h,
            rect: imgProp.rect
        }
    ];
    var options = {
        index: 1, // start at first slide
        bgOpacity: .8,
        getThumbBoundsFn: function (index: number) {
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            const rect = items[index].rect
            console.log(rect)
            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
        }
    };
    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

export default () => {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll('.pswp-btn').forEach((item) => {
            item.addEventListener("click", event => {
                const _t: HTMLElement = event.target as HTMLElement
                const _src: string = _t.dataset.pswpsrc as string
                var img = new Image()
                img.src = _src
                img.addEventListener("load", (event) => {
                    const _imgProp: HTMLImageElement = event.target as HTMLImageElement
                    openPhotoSwipe({
                        src: _src,
                        w: _imgProp.width,
                        h: _imgProp.height,
                        rect: item.getBoundingClientRect()
                    } as ImgProp)
                })
            });
        })
    })
}