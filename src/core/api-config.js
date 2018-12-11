export const fetchAdvert = {
  path: '/api/v1/adverts',
  method: 'GET'
};

export const createAdvert = {
  path: '/api/v1/adverts',
  method: 'POST'
};

export const deleteAdvert = {
  path: '/api/v1/adverts/:id',
  // id? - необязательный параметр
  method: 'DELETE'
};
