(()=>{"use strict";var e=document.querySelector("#card-template").content.querySelector(".card");function t(t,n,o,r){var c=e.cloneNode(!0),p=c.querySelector(".card__delete-button"),u=c.querySelector(".card__like-button"),a=c.querySelector(".card__image"),i=c.querySelector(".card__title");return a.src=t.link,a.alt=t.name,i.textContent=t.name,u.addEventListener("click",(function(){return o(u)})),p.addEventListener("click",(function(){return n(c)})),a.addEventListener("click",(function(){return r(t)})),c}function n(e){e.remove()}function o(e){e.classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",p)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p)}function p(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&c(t)}}function u(e){e.target===e.currentTarget&&c(e.target)}var a=document.querySelector(".content").querySelector(".places__list"),i=document.forms["edit-profile"],d=i.elements.name,s=i.elements.description,l=document.querySelector(".profile__title"),m=document.querySelector(".profile__description"),_=document.forms["new-place"],f=_.elements["place-name"],v=_.elements.link,y=document.querySelector(".popup_type_image .popup__image"),k=document.querySelector(".popup_type_image .popup__caption"),q={editName:{popup:document.querySelector(".popup_type_edit"),openButton:document.querySelector(".profile__edit-button"),closeButton:document.querySelector(".popup_type_edit .popup__close")},addCard:{popup:document.querySelector(".popup_type_new-card"),openButton:document.querySelector(".profile__add-button"),closeButton:document.querySelector(".popup_type_new-card .popup__close")},openCard:{popup:document.querySelector(".popup_type_image"),openButton:null,closeButton:document.querySelector(".popup_type_image .popup__close")}};function S(e){r(q.openCard.popup),y.src=e.link,y.alt=e.name,k.textContent=e.name}function L(e,t){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?t.classList.remove("button_inactive"):t.classList.add("button_inactive")}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){a.append(t(e,n,o,S))})),Object.values(q).forEach((function(e){var t=e.popup,n=e.openButton,o=e.closeButton;null!==n&&n.addEventListener("click",(function(){r(t),n.classList.contains("profile__edit-button")&&(d.value=l.textContent,s.value=m.textContent)})),o.addEventListener("click",(function(){c(t)})),t.addEventListener("click",u)})),i.addEventListener("submit",(function(e){e.preventDefault(),l.textContent=d.value,m.textContent=s.value,c(q.editName.popup)})),_.addEventListener("submit",(function(e){e.preventDefault();var r={name:f.value,link:v.value};a.prepend(t(r,n,o,S)),c(q.addCard.popup),_.reset()})),Array.from(document.querySelectorAll(".popup__form")).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e){var t=Array.from(e.querySelectorAll(".popup__input")),n=e.querySelector(".popup__button");L(t,n),t.forEach((function(o){o.addEventListener("input",(function(){!function(e,t){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove("form__input_type_error"),n.classList.remove("form__input-error_active"),n.textContent=""}(e,t):function(e,t,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add("form__input_type_error"),o.textContent=n,o.classList.add("form__input-error_active")}(e,t,t.validationMessage)}(e,o),L(t,n)}))}))}(e)}))})();