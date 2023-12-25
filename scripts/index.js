const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');

function addCard(elements) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  cardElement.querySelector('.card__image').src = elements.link;
  cardElement.querySelector('.card__title').textContent = elements.name;
  cardsContainer.append(cardElement);

  deleteButton.addEventListener('click', function () {
    cardElement.remove();
  }); 
}

initialCards.forEach(item => {
  const card = addCard(item);
})
