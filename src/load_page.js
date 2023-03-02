

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