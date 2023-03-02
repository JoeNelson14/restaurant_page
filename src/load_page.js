

export default function pageLoad(cartIcon, headerBg) {
  let contentContainer = document.querySelector('#content');
  let header = document.createElement('header');
  let navbar = document.createElement('nav');
  let navLinkContainer = document.createElement('ul');
  let navLinkItemArray = [document.createElement('li'),
  document.createElement('li'),
  document.createElement('li')];

  navLinkContainer.classList.add('nav-link-container');

  cartIcon.classList.add('cart-icon');

  contentContainer.appendChild(header);
  header.appendChild(navbar);
  navbar.append(navLinkContainer, cartIcon);

  
  navLinkItemArray.forEach(li => {
    li.classList.add('list-item');
    navLinkContainer.appendChild(li);
  });

  navLinkItemArray[0].appendChild(document.createElement('a')).textContent = 'Menu';
  navLinkItemArray[0].classList.add('menu-link');
  navLinkItemArray[0].firstChild.setAttribute('href', '');
  navLinkItemArray[1].appendChild(document.createElement('a')).textContent = 'Online Order';
  navLinkItemArray[1].classList.add('order-link');
  navLinkItemArray[1].firstChild.setAttribute('href', '');
  navLinkItemArray[2].appendChild(document.createElement('a')).textContent = 'About Us';
  navLinkItemArray[2].classList.add('about-link');
  navLinkItemArray[2].firstChild.setAttribute('href', '');

  /////////// HEADER TITLE \\\\\\\\\\\
  
  let titleContainer = document.createElement('div');
  let mainTitleText = document.createElement('h1');
  let subTitleText = document.createElement('p');

  

  titleContainer.classList.add('title-container');
  mainTitleText.classList.add('main-title-text');
  subTitleText.classList.add('sub-title-text');


  mainTitleText.textContent = 'One Of One Coffee';
  subTitleText.textContent = 'Mundo Novo Beans ● 24 Flavors ● Specialty Drinks'

  header.appendChild(titleContainer);
  titleContainer.append(mainTitleText, subTitleText);

};