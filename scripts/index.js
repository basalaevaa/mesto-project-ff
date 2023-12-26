const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');

function createCard(element, deleteElement) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardElement.querySelector('.card__image').alt = element.name;

  deleteButton.addEventListener('click', () => deleteElement(cardElement));

  return cardElement;
}

initialCards.forEach(item => {
  const card = createCard(item, deleteCard);
  cardsContainer.append(card);
})

function deleteCard(cardElement) {
  cardElement.remove();
} 