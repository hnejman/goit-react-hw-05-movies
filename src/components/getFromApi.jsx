import axios from 'axios';

export async function getFromApi(query) {
  if (query) {
    const key = '5e8ba698019c5bc3ab4e3063bfcf933c';
    return await axios
      .get(`https://api.themoviedb.org/${query}?api_key=${key}`)
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log('lack query');
  }
}

export async function searchInApi(query) {
  if (query) {
    const key = '5e8ba698019c5bc3ab4e3063bfcf933c';
    return await axios
      .get(
        `https://api.themoviedb.org//3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${key}`
      )
      .catch(function (error) {
        console.log(error);
      });
  } else {
    console.log('lack query');
  }
}