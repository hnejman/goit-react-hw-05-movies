import { getFromApi } from 'components/getFromApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({setHome}) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getFromApi('3/movie/popular').then(response => {
      setResponse(response.data.results);
      setHome();
    });
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul>
      {response.map(ele => {
        return (
          <li key={ele.id}>
            <Link to={`/movies/${ele.id}`}>
              {ele.title}</Link>
          </li>
        );
      })}
    </ul>
  );

}

export default Home