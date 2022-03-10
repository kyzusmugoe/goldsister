import { library, dom, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { 
    faUser, 
    faUsers, 
    faShoppingCart, 
    faPhoneAlt, 
    faPlus, 
    faMinus, 
    faTrash, 
    faTimes, 
    faHeart, 
    faPlayCircle, 
    faExpand, 
    faChevronLeft, 
    faChevronRight, 
    faCreditCard, 
    faStar,
    faClock
} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookSquare, faFacebookF, faInstagram, faYoutube, faLine, faTwitter, faApple, faGoogle } from '@fortawesome/free-brands-svg-icons'

export default () => {
    //font awsome
    library.add(
        faUser as IconDefinition,
        faUsers as IconDefinition,
        faShoppingCart as IconDefinition,
        faPhoneAlt as IconDefinition,
        faPlus as IconDefinition,
        faMinus as IconDefinition,
        faTrash as IconDefinition,
        faTimes as IconDefinition,
        faHeart as IconDefinition,
        faFacebook as IconDefinition,
        faFacebookF as IconDefinition,
        faFacebookSquare as IconDefinition,
        faInstagram as IconDefinition,
        faYoutube as IconDefinition,
        faLine as IconDefinition,
        faStar as IconDefinition,
        faClock as IconDefinition,
        faPlayCircle as IconDefinition,
        faExpand as IconDefinition,
        faTwitter as IconDefinition,
        faApple as IconDefinition,
        faGoogle as IconDefinition,
        faPlayCircle as IconDefinition,
        faExpand as IconDefinition,
        faChevronLeft as IconDefinition,
        faChevronRight as IconDefinition,
        faCreditCard as IconDefinition
    )
    dom.i2svg()
}