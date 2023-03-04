import './style.css';
import cart_icon from './shopping-cart.png';
import pageLoad from './load_main_page.js';
import navLoad from './load_nav';
import menuPageLoad from './load_menu';
import orderPageLoad from './load_order';
import aboutPageLoad  from './load_about';

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
