function openModal(popup) {
    popup.classList.add('popup_is-opened');
    popup.classList.add('popup_is-animated');
    document.addEventListener('keydown', closeOnEscape);
}

function closeModal(popup) {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closeOnEscape);
}

function closeOnEscape(evt) {
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_is-opened');
        if (openPopup) {
        closeModal(openPopup);
        }
    }
}

function closeOnOverlayClick(evt) {
    closeModal(evt.target);
}
export { openModal, closeModal, closeOnEscape, closeOnOverlayClick };