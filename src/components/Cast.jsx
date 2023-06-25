import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getFromApi } from './getFromApi';

export const Cast = () => {
  const [response, setResponse] = useState([]);
  let location = useLocation();
  location = location.pathname.split('/');

  useEffect(() => {
    getFromApi(`3/movie/${location[2]}/credits`).then(response => {
      setResponse(response.data);
    });
  }, [location]);

  function checkArray(arr) {
    if (Array.isArray(arr)) {
      return arr.map(element => {
        if (element.profile_path !== null) {
          return (
            <li key={element.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200` + element.profile_path}
                alt={element.name}
              />
              <p>{element.name}</p>
              <p>{element.character}</p>
            </li>
          );
        } else {
          return (
            <li key={element.id}>
              <img
                src="https://i.pinimg.com/564x/cb/b6/1d/cbb61dc9f560a4e96c2c64f41a90ce3f.jpg"
                alt="default profile"
              />
              <p>{element.name}</p>
              <p>{element.character}</p>
            </li>
          );
        }
      });
    }
  }

  return (
    <div>
      {checkArray(response.cast)}
    </div>
  );
};
