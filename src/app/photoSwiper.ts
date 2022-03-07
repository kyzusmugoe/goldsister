import 'photoswipe/src/css/main.scss'
import 'photoswipe/src/css/default-skin/default-skin.scss'
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
import PhotoSwipe from 'photoswipe'
import { init } from './ParallaxScrolling';


type ImgProp = {
    src: string
    w: number
    h: number
}

let cur: number = 0;
let total: number = 0;
let items: ImgProp[] = [];

const openPhotoSwipe = ( imgProp:ImgProp) => {
    var pswpElement: HTMLElement = document.querySelectorAll('.pswp')[0] as HTMLElement;

    // build items array
    
    var items = [
        {
            src: imgProp.src,
            w: imgProp.w,
            h: imgProp.h
        }
    ];
    
    var options = {
        index: 1 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}


const imgLoader = (src: string) => {
    var img = new Image()
    img.src = src
    img.addEventListener("load", (event) => {
        const _t: HTMLImageElement = event.target as HTMLImageElement
        items.push({
            src: src,
            w: _t.width,
            h: _t.height
        })

        total++
        if (cur == total) {

           
        }
    })
}



export default () => {
    document.addEventListener("DOMContentLoaded",()=>{   
        document.querySelectorAll('.pswp-btn').forEach((item) => {
            item.addEventListener("click", event => {
                const _t: HTMLElement = event.target as HTMLElement
                const  _src:string =  _t.dataset.pswpsrc as string
                console.log(_src)
                var img = new Image()
                img.src = _src
                img.addEventListener("load", (event) => {
                    const _imgProp: HTMLImageElement = event.target as HTMLImageElement              
                    openPhotoSwipe({
                        src: _src,
                        w: _imgProp.width,
                        h: _imgProp.height
                    } as ImgProp )
                })
            });
        })
    })
}