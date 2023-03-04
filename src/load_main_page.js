import removeAllContent from "./reset_content";

export default function pageLoad() {
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