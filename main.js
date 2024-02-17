(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{Mr:()=>p,h7:()=>s});var n={baseUrl:"https://nomoreparties.co/v1/wff-cohort-6",headers:{authorization:"e47886c2-f03e-4144-aaa1-488fe1fd9c61","Content-Type":"application/json"}},r=function(e){if(!e.ok)throw new Error("Ошибка: ".concat(e.status));return e.json()},o=function(){return fetch("".concat(n.baseUrl,"/users/me"),{method:"GET",headers:n.headers}).then((function(e){return r(e)}))},c=function(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:n.headers}).then((function(e){return r(e)}))},a=function(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:n.headers}).then((function(e){return r(e)}))},u=function(e,t,n,r,o){var c=t,a=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),p=a.querySelector(".card__like-count"),d=e._id;return u.src=e.link,u.alt=e.name,i.textContent=e.name,p.textContent=e.likes.length,u.addEventListener("click",(function(){return o(e)})),s.addEventListener("click",(function(e){r(e,d,p)})),e.owner._id===c?l.addEventListener("click",(function(e){n(e,d)})):l.setAttribute("hidden",!0),e.likes.some((function(e){e._id===c&&s.classList.add("card__like-button_is-active")})),a},i=function(e,t){(function(e){return fetch("".concat(n.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:n.headers}).then((function(e){return r(e)}))})(t).then((function(){e.target.closest(".places__item").remove()})).catch((function(e){return console.log(e)}))},l=function(e,t,n){(e.target.classList.contains("card__like-button_is-active")?a:c)(t).then((function(t){e.target.classList.toggle("card__like-button_is-active"),n.textContent=t.likes.length})).catch((function(e){return console.log(e)}))};function s(e){e.classList.add("popup_is-opened"),e.classList.add("popup_is-animated"),document.addEventListener("keydown",d)}function p(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d)}function d(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&p(t)}}var f=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},_=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)},y=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):_(t,n)},m=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){f(e,n,t)})),_(r,t)};function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v,S,b=document.querySelector(".content"),q=b.querySelector(".places__list"),g=b.querySelector(".profile__title"),E=b.querySelector(".profile__description"),L=b.querySelector(".profile__image"),C=document.querySelector(".profile__edit-button"),k=document.querySelector(".profile__add-button"),A=document.querySelectorAll(".popup__close"),x=document.querySelectorAll(".popup"),O=document.querySelector(".popup_type_avatar"),w=document.querySelector(".popup_type_edit"),T=document.querySelector(".popup_type_new-card"),j=document.querySelector(".popup_type_image"),U=O.querySelector(".popup__form"),P=U.querySelector(".popup__input_type_url"),B=U.querySelector(".popup__button"),M=w.querySelector(".popup__form"),D=M.querySelector(".popup__input_type_name"),N=M.querySelector(".popup__input_type_description"),I=M.querySelector(".popup__button"),J=T.querySelector(".popup__form"),G=J.querySelector(".popup__input_type_card-name"),H=J.querySelector(".popup__input_type_url"),V=J.querySelector(".popup__button"),z=j.querySelector(".popup__image"),$=j.querySelector(".popup__caption"),F={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},K=function(e){s(j),z.src=e.link,z.alt=e.name,$.textContent=e.name},Q=function(e,t){t.textContent=e?"Сохранение...":"Сохранить"};x.forEach((function(e){e.classList.add("popup_is-animated")})),Promise.all([fetch("".concat(n.baseUrl,"/cards"),{method:"GET",headers:n.headers}).then((function(e){return r(e)})),o()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];v=c._id,o.forEach((function(e){g.textContent=c.name,E.textContent=c.about,L.style="background-image: url('".concat(c.avatar,"')"),q.append(u(e,v,i,l,K))}))})).catch((function(e){console.log(e)})),L.addEventListener("click",(function(){m(O,F),s(O),o().then((function(e){P.value=e.avatar})).catch((function(e){console.log(e)}))})),C.addEventListener("click",(function(){m(M,F),s(w),D.value=g.textContent,N.value=E.textContent})),k.addEventListener("click",(function(){m(T,F),s(T),J.reset()})),A.forEach((function(e){var n=e.closest(".popup");n.addEventListener("mousedown",t.closeByOverlay),e.addEventListener("click",(function(){return p(n)}))})),U.addEventListener("submit",(function(e){var t;e.preventDefault(),Q(!0,B),(t=P.value,fetch("".concat(n.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:t})}).then((function(e){return r(e)}))).then((function(e){L.style="background-image: url('".concat(e.avatar,"')"),p(O)})).finally((function(){Q(!1,B)})).catch((function(e){console.log(e)}))})),M.addEventListener("submit",(function(e){var t,o;e.preventDefault(),Q(!0,I),(t=D.value,o=N.value,fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:n.headers,body:JSON.stringify({name:t,about:o})}).then((function(e){return r(e)}))).then((function(e){g.textContent=e.name,E.textContent=e.about,p(w)})).finally((function(){Q(!1,I)})).catch((function(e){console.log(e)}))})),J.addEventListener("submit",(function(e){var t,o;e.preventDefault(),Q(!0,V),(t=G.value,o=H.value,fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify({name:t,link:o})}).then((function(e){return r(e)}))).then((function(e){q.prepend(u(e,v,i,l,K)),J.reset(),p(T)})).finally((function(){Q(!1,V)})).catch((function(e){console.log(e)}))})),S=F,Array.from(document.querySelectorAll(S.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);y(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),y(n,r,t)}))}))}(e,S)}))})();