import './style.css';
import cart_icon from './shopping-cart.png';
import { pageLoad, navLoad, menuPageLoad, orderPageLoad, aboutPageLoad } from './load_page.js';

const cartIcon = new Image();
cartIcon.src = cart_icon;
let navButtons = navLoad(cartIcon);
menuPageLoad();

navButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === 'Menu')
    {
      menuPageLoad();
    }
    else if (button.textContent === 'Online Order')
    {
      orderPageLoad();
    }
    else if (button.textContent === 'About Us')
    {
      aboutPageLoad();
    }
    else
    {
      pageLoad();
    }
  });
});
