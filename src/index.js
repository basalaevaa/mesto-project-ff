import "./index.css";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal, closeOnOverlayClick } from "./components/modal.js";

const container = document.querySelector(".content");
const cardsContainer = container.querySelector(".places__list");

const formEditProfile = document.forms["edit-profile"];
const nameInput = formEditProfile.elements.name;
const jobInput = formEditProfile.elements.description;
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__description");

const formAddImage = document.forms["new-place"];
const placeInput = formAddImage.elements["place-name"];
const linkInput = formAddImage.elements.link;

const imageInPopup = document.querySelector(".popup_type_image .popup__image");
const imageName = document.querySelector(".popup_type_image .popup__caption");

const popups = {
  editName: {
    popup: document.querySelector(".popup_type_edit"),
    openButton: document.querySelector(".profile__edit-button"),
    closeButton: document.querySelector(".popup_type_edit .popup__close"),
  },
  addCard: {
    popup: document.querySelector(".popup_type_new-card"),
    openButton: document.querySelector(".profile__add-button"),
    closeButton: document.querySelector(".popup_type_new-card .popup__close"),
  },
  openCard: {
    popup: document.querySelector(".popup_type_image"),
    openButton: null,
    closeButton: document.querySelector(".popup_type_image .popup__close"),
  },
};

function openImage(element) {
  openModal(popups.openCard.popup);
  imageInPopup.src = element.link;
  imageInPopup.alt = element.name;
  imageName.textContent = element.name;
}

function handleFormAddImageSubmit(evt) {
  evt.preventDefault();
  const element = {
    name: placeInput.value,
    link: linkInput.value,
  };
  cardsContainer.prepend(createCard(element, deleteCard, likeCard, openImage));
  closeModal(popups.addCard.popup);
  formAddImage.reset();
}

function handleFormEditProfileSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal(popups.editName.popup);
}

initialCards.forEach((item) => {
  cardsContainer.append(createCard(item, deleteCard, likeCard, openImage));
});

Object.values(popups).forEach(({ popup, openButton, closeButton }) => {
  if (openButton !== null) {
    openButton.addEventListener("click", () => {
      openModal(popup);
      if (openButton.classList.contains("profile__edit-button")) {
        nameInput.value = nameProfile.textContent;
        jobInput.value = jobProfile.textContent;
      }
    });
  }
  closeButton.addEventListener("click", () => {
    closeModal(popup);
  });
  popup.addEventListener("click", closeOnOverlayClick);
});

formEditProfile.addEventListener("submit", handleFormEditProfileSubmit);
formAddImage.addEventListener("submit", handleFormAddImageSubmit);

//Спасибо большое за ревью!