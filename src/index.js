import './index.css';
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { initialCards } from "./components/cards.js";
import { openModal, closeModal } from "./components/modal.js";

const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');

const formElement = document.forms['edit-profile'];
const nameInput = formElement.elements.name;
const jobInput = formElement.elements.description;
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__description');

nameInput.value = nameProfile.textContent;
jobInput.value = jobProfile.textContent;

const formImage = document.forms['new-place'];
const placeInput = formImage.elements['place-name'];
const linkInput = formImage.elements.link;

const popups = {
  editName: {
    popup: document.querySelector('.popup_type_edit'),
    openButton: document.querySelector('.profile__edit-button'),
    closeButton: document.querySelector('.popup_type_edit .popup__close')
  },
  addCard: {
    popup: document.querySelector('.popup_type_new-card'),
    openButton: document.querySelector('.profile__add-button'),
    closeButton: document.querySelector('.popup_type_new-card .popup__close')
  },
  openCard: {
    popup: document.querySelector('.popup_type_image'),
    openButton: null,
    closeButton: document.querySelector('.popup_type_image .popup__close')
  }
};

function closeOnEscape(evt) {
  if (evt.key === 'Escape') {
    Object.values(popups).forEach(({ popup }) => {
      closeModal(popup);
    });
  }
}

function closeOnOverlayClick(evt) {
  if (evt.target === evt.currentTarget) {
    Object.values(popups).forEach(({ popup }) => {
      closeModal(popup);
    });
  }
}

function openImage(evt) {
  const imageInPopup = document.querySelector('.popup_type_image .popup__image');
  const imageName = document.querySelector('.popup_type_image .popup__caption');

  if (evt.target === evt.currentTarget.querySelector('.card__image')) {
    openModal(popups.openCard.popup);
    imageInPopup.src = evt.currentTarget.querySelector('.card__image').src;
    imageInPopup.alt = evt.currentTarget.querySelector('.card__image').alt;
    imageName.textContent = evt.currentTarget.querySelector('.card__title').textContent;
  }
  document.addEventListener('keydown', closeOnEscape);
}

function addCardFormSubmit(evt) {
  evt.preventDefault();
  const element = {
    name: placeInput.value,
    link: linkInput.value
  };
  cardsContainer.prepend(createCard(element, deleteCard, likeCard, openImage));
  closeModal(popups.addCard.popup);
  placeInput.value = '';
  linkInput.value = '';
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeModal(popups.editName.popup);
}

initialCards.forEach(item => {
  cardsContainer.append(createCard(item, deleteCard, likeCard, openImage));
})

Object.values(popups).forEach(({ popup, openButton, closeButton}) => {
  if (openButton !== null) {
    openButton.addEventListener('click', () => {
      openModal(popup);
      document.addEventListener('keydown', closeOnEscape);
    });
  }
  closeButton.addEventListener('click', () => {
    closeModal(popup);
    document.removeEventListener('keydown', closeOnEscape);
  })
  popup.addEventListener('click', closeOnOverlayClick);
});

formElement.addEventListener('submit', handleFormSubmit);

formImage.addEventListener('submit',addCardFormSubmit);