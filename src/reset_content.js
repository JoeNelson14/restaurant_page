

export default function removeAllContent() {
  let contentContainer = document.querySelector('#content');

  contentContainer.replaceChildren();
  contentContainer.classList.remove('homepage-img');
}