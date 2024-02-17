(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"e47886c2-f03e-4144-aaa1-488fe1fd9c61","Content-Type":"application/json"}},t=function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()},n=function(){return fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))},o=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))},c=document.querySelector("#card-template").content.querySelector(".card");function a(e,t,n,r,o){var a=c.cloneNode(!0),u=a.querySelector(".card__delete-button"),i=a.querySelector(".card__like-button"),l=a.querySelector(".card__image"),s=a.querySelector(".card__title"),d=a.querySelector(".card__like-count");return e._id,l.src=e.link,l.alt=e.name,s.textContent=e.name,i.addEventListener("click",(function(){return n(i)})),l.addEventListener("click",(function(){return r(e)})),d.textContent=e.likes.length,cardData.owner._id===cardOwnerId?u.addEventListener("click",(function(){return t(a)})):u.setAttribute("hidden",!0),cardData.likes.some((function(e){e._id===cardOwnerId&&i.classList.add("card__like-button_is-active")})),a}var u=function(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))})(r).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))},i=function(e,t,n){(e.target.classList.contains("card__like-button_is-active")?o:r)(t).then((function(t){e.target.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){return console.log(e)}))};function l(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",d)}function s(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d)}function d(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&s(t)}}function p(e){e.target===e.currentTarget&&s(e.target)}var f=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},_=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},y=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):_(t,n)},m=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){f(e,n,t)})),_(r,t)};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,S,b=document.querySelector(".content"),q=b.querySelector(".places__list"),g=b.querySelector(".profile__title"),E=b.querySelector(".profile__description"),L=b.querySelector(".profile__image"),C=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-button"),A=document.querySelectorAll(".popup__close"),w=document.querySelectorAll(".popup"),x=document.querySelector(".popup_type_avatar"),T=document.querySelector(".popup_type_edit"),U=document.querySelector(".popup_type_new-card"),O=document.querySelector(".popup_type_image"),j=x.querySelector(".popup__form"),D=j.querySelector(".popup__input_type_url"),B=j.querySelector(".popup__button"),I=T.querySelector(".popup__form"),P=I.querySelector(".popup__input_type_name"),M=I.querySelector(".popup__input_type_description"),N=I.querySelector(".popup__button"),J=U.querySelector(".popup__form"),G=J.querySelector(".popup__input_type_card-name"),H=J.querySelector(".popup__input_type_url"),V=J.querySelector(".popup__button"),z=(O.querySelector(".popup__image"),O.querySelector(".popup__caption"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),$=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};w.forEach((function(e){e.classList.add("popup_is-animated")})),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)})),n()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];v=c._id,o.forEach((function(e){g.textContent=c.name,E.textContent=c.about,L.style="background-image: url('".concat(c.avatar,"')"),q.append(a(e,v,u,i))}))})).catch((function(e){console.log(e)})),L.addEventListener("click",(function(){m(x,z),l(x),n().then((function(e){D.value=e.avatar})).catch((function(e){console.log(e)}))})),C.addEventListener("click",(function(){m(I,z),l(T),P.value=g.textContent,M.value=E.textContent})),k.addEventListener("click",(function(){m(U,z),l(U),J.reset()})),A.forEach((function(e){var t=e.closest(".popup");t.addEventListener("mousedown",p),e.addEventListener("click",(function(){return s(t)}))})),j.addEventListener("submit",(function(n){var r;n.preventDefault(),$(!0,B),(r=D.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){L.style="background-image: url('".concat(e.avatar,"')"),s(x)})).finally((function(){$(!1,B)})).catch((function(e){console.log(e)}))})),I.addEventListener("submit",(function(n){var r,o;n.preventDefault(),$(!0,N),(r=P.value,o=M.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){g.textContent=e.name,E.textContent=e.about,s(T)})).finally((function(){$(!1,N)})).catch((function(e){console.log(e)}))})),J.addEventListener("submit",(function(n){var r,o;n.preventDefault(),$(!0,V),(r=G.value,o=H.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then((function(e){return t(e)}))).then((function(e){q.prepend(a(e,v,u,i)),J.reset(),s(U)})).finally((function(){$(!1,V)})).catch((function(e){console.log(e)}))})),S=z,Array.from(document.querySelectorAll(S.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);y(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),y(n,r,t)}))}))}(e,S)}))})();