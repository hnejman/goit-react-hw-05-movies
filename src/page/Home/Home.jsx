import { getFromApi } from '../getFromApi/getFromApi';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types'; 

const Home = ({setHome}) => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    getFromApi('3/movie/popular').then(response => {
      setResponse(response.data.results);
      setHome();
    });
  }, [setHome]);

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

Home.propTypes = {
  setHome: PropTypes.func.isRequired
}

export default Home;