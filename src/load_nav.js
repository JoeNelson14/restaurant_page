export default function navLoad(cartIcon) {
  let body = document.querySelector('body');
  let header = document.createElement('header');
  let navbar = document.createElement('nav');
  let navLinkContainer = document.createElement('ul');
  let navLinkItemArray = [document.createElement('li'),
  document.createElement('li'),
  document.createElement('li')];
  let navTitle = document.createElement('h1');

  navLinkContainer.classList.add('nav-link-container');
  navTitle.classList.add('nav-title');
  cartIcon.classList.add('cart-icon');

  navTitle.textContent = 'Primo Coffee'

  body.prepend(header);
  header.appendChild(navbar);
  navbar.append(navLinkContainer, navTitle, cartIcon);

  
  navLinkItemArray.forEach(li => {
    li.classList.add('list-item');
    navLinkContainer.appendChild(li);
  });

  navLinkItemArray[0].textContent = 'Menu';
  navLinkItemArray[0].classList.add('menu-link');
  navLinkItemArray[1].textContent = 'Online Order';
  navLinkItemArray[1].classList.add('order-link');
  navLinkItemArray[2].textContent = 'About Us';
  navLinkItemArray[2].classList.add('about-link');

  let returnArray = [...navLinkItemArray, navTitle]

  return returnArray;
};