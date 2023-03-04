import removeAllContent from "./reset_content";


export default function menuPageLoad() {
  removeAllContent();

  let contentContainer = document.querySelector('#content');
  contentContainer.classList.add('menu-page-bg');
  let cardContainer = document.createElement('div');
  let menuCards = [document.createElement('div'), document.createElement('div'), document.createElement('div')];
  let flavorDrinkList = document.createElement('ul');
  let flavorItems = [document.createElement('li'), document.createElement('li'), document.createElement('li')];
  let specialDrinkList = document.createElement('ul');
  let specialItems = [document.createElement('li'), document.createElement('li'), document.createElement('li')];
 
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
  menuCards[2].appendChild(specialDrinkList).classList.add('special-drink-list');
  

  flavorItems.forEach(item => {
    item.classList.add('drink-item');
    flavorDrinkList.appendChild(item);
  });

  specialItems.forEach(item => {
    item.classList.add('drink-item');
    specialDrinkList.appendChild(item);
  });

  flavorItems[0].textContent = "Carmel Brulee - hot/ice";
  flavorItems[0].appendChild(document.createElement('p')).classList.add('item-price');
  flavorItems[0].lastChild.textContent = '- S $1.99 / M $2.99 / L $3.99';

  flavorItems[1].textContent = 'Vanilla Latte - hot/ice'
  flavorItems[1].appendChild(document.createElement('p')).classList.add('item-price');
  flavorItems[1].lastChild.textContent = '- S $1.99 / M $2.99 / L $3.99';

  flavorItems[2].textContent = 'Mocha Latte - hot/ice'
  flavorItems[2].appendChild(document.createElement('p')).classList.add('item-price');
  flavorItems[2].lastChild.textContent = '- S $1.99 / M $2.99 / L $3.99';

  specialItems[0].textContent = 'Espresso con Panna - hot';
  specialItems[0].appendChild(document.createElement('p')).classList.add('item-price');
  specialItems[0].lastChild.textContent = '- S $2.99 / M $3.99 / L $4.99';

  specialItems[1].textContent = 'Galão - hot/ice';
  specialItems[1].appendChild(document.createElement('p')).classList.add('item-price');
  specialItems[1].lastChild.textContent = '- S $2.99 / M $3.99 / L $4.99';

  specialItems[2].textContent = 'Café Au Lait - hot';
  specialItems[2].appendChild(document.createElement('p')).classList.add('item-price');
  specialItems[2].lastChild.textContent = '- S $2.99 / M $3.99 / L $4.99';
};