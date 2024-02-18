import './index.css';
import { createCard, removeCard, toggleLike } from './components/card.js';
import { openModal, closeModal, closeByOverlay } from './components/modal.js';
import { enableValidation, clearValidation } from './components/validation.js';
import {
  getCadrs,
  getMyData,
  editProfile,
  postNewCard,
  editAvatar,
} from './components/api.js';

const content = document.querySelector('.content');

const placesList = content.querySelector('.places__list');

const profileTitle = content.querySelector('.profile__title');
const profileDescription = content.querySelector('.profile__description');
const profileAvatar = content.querySelector('.profile__image');

const imageInPopup = document.querySelector(".popup_type_image .popup__image");
const imageName = document.querySelector(".popup_type_image .popup__caption");

const allPopups = {
  editName: {
    popup: document.querySelector(".popup_type_edit"),
    openButton: document.querySelector(".profile__edit-button"),
    closeButton: document.querySelector(".popup_type_edit .popup__close"), 
    submitButton: document.querySelector(".popup_type_edit .popup__button"),
  },
  addCard: {
    popup: document.querySelector(".popup_type_new-card"),
    openButton: document.querySelector(".profile__add-button"),
    closeButton: document.querySelector(".popup_type_new-card .popup__close"),
    submitButton: document.querySelector(".popup_type_new-card .popup__button"),
  },
  openCard: {
    popup: document.querySelector(".popup_type_image"),
    openButton: null,
    closeButton: document.querySelector(".popup_type_image .popup__close"),
    submitButton: null,
  },
  changeAvatar: {
    popup: document.querySelector(".popup_type_avatar"),
    openButton: document.querySelector(".logo .header__logo"),
    closeButton: document.querySelector(".popup_type_avatar .popup__close"),
    submitButton: document.querySelector(".popup_type_avatar .popup__button"),
  }
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

const avatarFormElement = allPopups.changeAvatar.popup.querySelector('.popup__form');
const avatarUrlInput = avatarFormElement.querySelector('.popup__input_type_url');

const editFormElement = allPopups.editName.popup.querySelector('.popup__form');
const nameInput = editFormElement.querySelector('.popup__input_type_name');
const jobInput = editFormElement.querySelector('.popup__input_type_description');
const editProfileFormElement = editFormElement.querySelector('.popup__button');

const addFormElement = allPopups.addCard.popup.querySelector('.popup__form');
const placeInput = addFormElement.querySelector('.popup__input_type_card-name');
const urlInput = addFormElement.querySelector('.popup__input_type_url');
const newCardFormElement = addFormElement.querySelector('.popup__button');


function openImage(element) {
  openModal(allPopups.openCard.popup);
  imageInPopup.src = element.link;
  imageInPopup.alt = element.name;
  imageName.textContent = element.name;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, editProfileFormElement);
  editProfile(nameInput.value, jobInput.value)
    .then((data) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(allPopups.editName.popup);
    })
    .finally(() => {
      renderLoading(false, editProfileFormElement);
    })
    .catch((err) => {
      console.log(err);
    });
};

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, newCardFormElement);
  postNewCard(placeInput.value, urlInput.value)
    .then((data) => {
      placesList.prepend(
        createCard(data, userId, removeCard, toggleLike, openImage)
      );
      addFormElement.reset();
      closeModal(allPopups.addCard.popup);
    })
    .finally(() => {
      renderLoading(false, newCardFormElement);
    })
    .catch((err) => {
      console.log(err);
    });
};

function handleEditAvatarSubmit(evt) {
  evt.preventDefault();
  renderLoading(true, allPopups.changeAvatar.submitButton);
  editAvatar(avatarUrlInput.value)
    .then((data) => {
      profileAvatar.style = `background-image: url('${data.avatar}')`;
      closeModal(allPopups.changeAvatar.popup);
    })
    .finally(() => {
      renderLoading(false, allPopups.changeAvatar.submitButton);
    })
    .catch((err) => {
      console.log(err);
    });
};

function renderLoading(isLoading, buttonElement) {
  buttonElement.textContent = isLoading ? 'Сохранение...' : 'Сохранить';
};

let userId;
Promise.all([getCadrs(), getMyData()])
  .then(([cards, data]) => {
    userId = data._id;
    cards.forEach((elem) => {
      profileTitle.textContent = data.name;
      profileDescription.textContent = data.about;
      profileAvatar.style = `background-image: url('${data.avatar}')`;
      placesList.append(
        createCard(elem, userId, removeCard, toggleLike, openImage)
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });


profileAvatar.addEventListener('click', () => {
  clearValidation(allPopups.changeAvatar.popup, validationConfig);
  openModal(allPopups.changeAvatar.popup);
  getMyData()
    .then((data) => {
      avatarUrlInput.value = data.avatar;
    })
    .catch((err) => {
      console.log(err);
    });
});

allPopups.editName.openButton.addEventListener('click', () => {
  clearValidation(editFormElement, validationConfig);
  openModal(allPopups.editName.popup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

allPopups.addCard.openButton.addEventListener('click', () => {
  clearValidation(allPopups.addCard.popup, validationConfig);
  openModal(allPopups.addCard.popup);
  addFormElement.reset();
});

Object.values(allPopups).forEach(({ popup, closeButton }) => {
  popup.addEventListener('mousedown', closeByOverlay);
  closeButton.addEventListener('click', () => closeModal(popup));
});

avatarFormElement.addEventListener('submit', handleEditAvatarSubmit);
editFormElement.addEventListener('submit', handleEditFormSubmit);
addFormElement.addEventListener('submit', handleNewCardFormSubmit);

enableValidation(validationConfig);