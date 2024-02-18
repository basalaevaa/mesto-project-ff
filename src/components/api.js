const fetchConfig = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
    headers: {
      authorization: 'e47886c2-f03e-4144-aaa1-488fe1fd9c61',
      'Content-Type': 'application/json',
    },
  };
  
  function handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
    return response.json();
  };
  
  function getCadrs() {
    return fetch(`${fetchConfig.baseUrl}/cards`, {
      method: 'GET',
      headers: fetchConfig.headers,
    }).then((response) => handleResponse(response));
  };

  function getMyData() {
    return fetch(`${fetchConfig.baseUrl}/users/me`, {
      method: 'GET',
      headers: fetchConfig.headers,
    }).then((response) => handleResponse(response));
  };
  
  function editProfile(userName, userAbout) {
    return fetch(`${fetchConfig.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: fetchConfig.headers,
      body: JSON.stringify({
        name: userName,
        about: userAbout,
      }),
    }).then((response) => handleResponse(response));
  };
  
  function editAvatar(userAvatar) {
    return fetch(`${fetchConfig.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: fetchConfig.headers,
      body: JSON.stringify({
        avatar: userAvatar,
      }),
    }).then((response) => handleResponse(response));
  };

  function postNewCard(cardTitle, cardLink) {
    return fetch(`${fetchConfig.baseUrl}/cards`, {
      method: 'POST',
      headers: fetchConfig.headers,
      body: JSON.stringify({
        name: cardTitle,
        link: cardLink,
      }),
    }).then((response) => handleResponse(response));
  };

  function likeCardAction(cardId) {
    return fetch(`${fetchConfig.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: fetchConfig.headers,
    }).then((response) => handleResponse(response));
  };
  
  function unlikeCardAction(cardId) {
    return fetch(`${fetchConfig.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: fetchConfig.headers,
    }).then((response) => handleResponse(response));
  };

  function deleteCard(cardId) {
    return fetch(`${fetchConfig.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: fetchConfig.headers,
    }).then((response) => handleResponse(response));
  };
  
  export {
    getCadrs,
    getMyData,
    editProfile,
    postNewCard,
    deleteCard,
    editAvatar,
    likeCardAction,
    unlikeCardAction,
  };