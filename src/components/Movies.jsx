import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { searchInApi } from './getFromApi';
import { Link } from 'react-router-dom';

const Movies = () => {
  let location = useLocation();
  location = location.pathname.split('/');
  const [response, setResponse] = useState('');

  const search = evt => {
    evt.preventDefault();
    const value = evt.target.elements.input.value;
    searchInApi(value).then(res => setResponse(res.data.results));
  };

  function form(location) {
    if (Array.isArray(location) && location.length < 3) {
      return (
        <form onSubmit={evt => search(evt)}>
          <input type="text" name="input"></input>
          <button type="submit">Search</button>
        </form>
      );
    }
  }

  function render(response) {
    if (Array.isArray(response)) {
      return response.map(ele => {
        return (
          <li key={ele.id}>
            <Link to={`/movies/${ele.id}`}>{ele.title}</Link>
          </li>
        );
      });
    }
  }

  return (
    <div>
      {form(location)}
      {render(response)}
    </div>
  );
};

export default Movies;