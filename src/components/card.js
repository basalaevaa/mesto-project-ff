function createCard(element, deleteElement, likeElement, openElement) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');

    cardElement.querySelector('.card__image').src = element.link;
    cardElement.querySelector('.card__title').textContent = element.name;
    cardElement.querySelector('.card__image').alt = element.name;

    likeButton.addEventListener('click', () => likeElement(likeButton)); 
    deleteButton.addEventListener('click', () => deleteElement(cardElement));
    cardElement.addEventListener('click', openElement);

    return cardElement;
}

function deleteCard(item) {
    item.remove();
}

function likeCard(item) {
    item.classList.toggle('card__like-button_is-active');
}

export { createCard, deleteCard, likeCard };