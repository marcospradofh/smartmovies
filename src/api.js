export const API_URL = 'https://smartmovies.herokuapp.com';

export function GET_DATA(type, page) {
  if (page) {
    return {
      url: `${API_URL}/${type}?page=${page}`,
      options: {
        method: 'GET',
      },
    };
  }
  return {
    url: `${API_URL}/${type}`,
    options: {
      method: 'GET',
    },
  };
}
export function GET_DATA_ID(type, id) {
  return {
    url: `${API_URL}/${type}/${id}`,
    options: {
      method: 'GET',
    },
  };
}
