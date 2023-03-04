

export function pageLoad() {
  removeAllContent();
  let contentContainer = document.querySelector('#content');
  contentContainer.classList.add('homepage-img');
  let titleContainer = document.createElement('div');
  let mainTitleText = document.createElement('h2');
  let subTitleText = document.createElement('p');
  let headerBtnContainer = document.createElement('div');
  let orderBtn = document.createElement('button');
  let novoBeanBtn = document.createElement('button');

  titleContainer.classList.add('title-container');
  mainTitleText.classList.add('main-title-text');
  subTitleText.classList.add('sub-title-text');
  headerBtnContainer.classList.add('header-btn-container');
  orderBtn.classList.add('header-button', 'order-btn');
  novoBeanBtn.classList.add('header-button', 'novo-btn');

  mainTitleText.textContent = 'A Taste You Will Never Forget.';
  subTitleText.textContent = 'Mundo Novo Beans ● 24 Flavors ● Specialty Drinks';
  orderBtn.textContent = 'Order Now';
  novoBeanBtn.textContent = 'Mundo Novo Bean';

  contentContainer.appendChild(titleContainer);
  headerBtnContainer.append(orderBtn, novoBeanBtn)
  titleContainer.append(mainTitleText, subTitleText, headerBtnContainer);

};

export function navLoad(cartIcon) {
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

export function menuPageLoad() {
  removeAllContent();

  let contentContainer = document.querySelector('#content');
  let cardContainer = document.createElement('div');
  let menuCards = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
  let flavorDrinkList = document.createElement('ul');
  let flavorItems = [document.createElement('li'), document.createElement('li'), document.createElement('li')];
 
  cardContainer.classList.add('card-container');
  contentContainer.appendChild(cardContainer);

  menuCards.forEach(element => {
    element.classList.add('menu-card');
    cardContainer.appendChild(element);
  });


  menuCards[0].appendChild(document.createElement('h2')).classList.add('menu-title');
  menuCards[1].appendChild(document.createElement('h2')).classList.add('flavor-title');
  menuCards[2].appendChild(document.createElement('h2')).classList.add('special-title');

  menuCards[0].firstChild.textContent = 'Menu';
  menuCards[1].firstChild.textContent = 'Flavored Drinks';
  menuCards[2].firstChild.textContent = 'Specialty Drinks';

  menuCards[0].appendChild(document.createElement('hr'));
  menuCards[1].appendChild(document.createElement('hr'));
  menuCards[2].appendChild(document.createElement('hr'));

  menuCards[1].appendChild(flavorDrinkList).classList.add('flavor-drink-list');
  

  flavorItems.forEach(item => {
    item.classList.add('flavor-drink');
    flavorDrinkList.appendChild(item);
  });

  flavorItems[0].textContent = "Carmel Brulee - hot/ice";
  flavorItems[0].appendChild(document.createElement('p')).classList.add('item-price');
  flavorItems[0].lastChild.textContent = '- sml ($1.99), md ($2.99), lg ($3.99)';

  flavorItems[1].textContent = 'Vanilla Latte - hot/ice'
  flavorItems[1].appendChild(document.createElement('p')).classList.add('item-price');
  flavorItems[1].lastChild.textContent = '- sml ($1.99), md ($2.99), lg ($3.99)';

  flavorItems[2].textContent = 'Mocha Latte - hot/ice'
  flavorItems[2].appendChild(document.createElement('p')).classList.add('item-price');
  flavorItems[2].lastChild.textContent = '- sml ($1.99), md ($2.99), lg ($3.99)';
};

export function orderPageLoad() {
  removeAllContent();
};

export function aboutPageLoad() {
  removeAllContent();
};

function removeAllContent() {
  let contentContainer = document.querySelector('#content');

  contentContainer.replaceChildren();
  contentContainer.classList.remove('homepage-img');
}