const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

function createCard(element, deleteElement, likeElement, openElement) {
  const cardElement = cardTemplate.cloneNode(true);
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;

  likeButton.addEventListener("click", () => likeElement(likeButton));
  deleteButton.addEventListener("click", () => deleteElement(cardElement));
  cardImage.addEventListener("click", () => openElement(element));

  return cardElement;
}

function deleteCard(item) {
  item.remove();
}

function likeCard(item) {
  item.classList.toggle("card__like-button_is-active");
}

export { createCard, deleteCard, likeCard };