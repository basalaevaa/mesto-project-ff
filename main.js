(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"e47886c2-f03e-4144-aaa1-488fe1fd9c61","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))},n=function(){return fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return t(e)}))},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then((function(e){return t(e)}))},o=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))},c=function(e,t,n,r,o){var c=t,u=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),a=u.querySelector(".card__image"),i=u.querySelector(".card__title"),l=u.querySelector(".card__delete-button"),s=u.querySelector(".card__like-button"),p=u.querySelector(".card__like-count"),d=e._id;return a.src=e.link,a.alt=e.name,i.textContent=e.name,p.textContent=e.likes.length,a.addEventListener("click",(function(){return o(e)})),s.addEventListener("click",(function(e){r(e,d,p)})),e.owner._id===c?l.addEventListener("click",(function(e){n(e,d)})):l.setAttribute("hidden",!0),e.likes.some((function(e){e._id===c&&s.classList.add("card__like-button_is-active")})),u},u=function(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))})(r).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))},a=function(e,t,n){(e.target.classList.contains("card__like-button_is-active")?o:r)(t).then((function(t){e.target.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){return console.log(e)}))};function i(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",s)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s)}function s(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&l(t)}}function p(e){e.target===e.currentTarget&&l(e.target)}var d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},f=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},_=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):f(t,n)},y=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){d(e,n,t)})),f(r,t)};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h,v,S=document.querySelector(".content"),b=S.querySelector(".places__list"),q=S.querySelector(".profile__title"),g=S.querySelector(".profile__description"),E=S.querySelector(".profile__image"),L=document.querySelector(".profile__edit-button"),C=document.querySelector(".profile__add-button"),k=document.querySelectorAll(".popup__close"),A=document.querySelectorAll(".popup"),x=document.querySelector(".popup_type_avatar"),T=document.querySelector(".popup_type_edit"),U=document.querySelector(".popup_type_new-card"),w=document.querySelector(".popup_type_image"),j=x.querySelector(".popup__form"),O=j.querySelector(".popup__input_type_url"),B=j.querySelector(".popup__button"),P=T.querySelector(".popup__form"),D=P.querySelector(".popup__input_type_name"),M=P.querySelector(".popup__input_type_description"),N=P.querySelector(".popup__button"),I=U.querySelector(".popup__form"),J=I.querySelector(".popup__input_type_card-name"),G=I.querySelector(".popup__input_type_url"),H=I.querySelector(".popup__button"),V=w.querySelector(".popup__image"),z=w.querySelector(".popup__caption"),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},F=function(e){i(w),V.src=e.link,V.alt=e.name,z.textContent=e.name},K=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};A.forEach((function(e){e.classList.add("popup_is-animated")})),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return t(e)})),n()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];h=i._id,o.forEach((function(e){q.textContent=i.name,g.textContent=i.about,E.style="background-image: url('".concat(i.avatar,"')"),b.append(c(e,h,u,a,F))}))})).catch((function(e){console.log(e)})),E.addEventListener("click",(function(){y(x,$),i(x),n().then((function(e){O.value=e.avatar})).catch((function(e){console.log(e)}))})),L.addEventListener("click",(function(){y(P,$),i(T),D.value=q.textContent,M.value=g.textContent})),C.addEventListener("click",(function(){y(U,$),i(U),I.reset()})),k.forEach((function(e){var t=e.closest(".popup");t.addEventListener("mousedown",p),e.addEventListener("click",(function(){return l(t)}))})),j.addEventListener("submit",(function(n){var r;n.preventDefault(),K(!0,B),(r=O.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then((function(e){return t(e)}))).then((function(e){E.style="background-image: url('".concat(e.avatar,"')"),l(x)})).finally((function(){K(!1,B)})).catch((function(e){console.log(e)}))})),P.addEventListener("submit",(function(n){var r,o;n.preventDefault(),K(!0,N),(r=D.value,o=M.value,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})}).then((function(e){return t(e)}))).then((function(e){q.textContent=e.name,g.textContent=e.about,l(T)})).finally((function(){K(!1,N)})).catch((function(e){console.log(e)}))})),I.addEventListener("submit",(function(n){var r,o;n.preventDefault(),K(!0,H),(r=J.value,o=G.value,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:r,link:o})}).then((function(e){return t(e)}))).then((function(e){b.prepend(c(e,h,u,a,F)),I.reset(),l(U)})).finally((function(){K(!1,H)})).catch((function(e){console.log(e)}))})),v=$,Array.from(document.querySelectorAll(v.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(e,v)}))})();