import './style.css';
import cart_icon from './shopping-cart.png';
import header_bg from './header-bg-4k.jpg';
import pageLoad from './load_page.js';

const cartIcon = new Image();
cartIcon.src = cart_icon;
pageLoad(cartIcon, header_bg);