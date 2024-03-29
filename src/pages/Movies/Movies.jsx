import { useLocation, useSearchParams,Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchInApi } from '../../components/atoms/getFromApi/getFromApi';
import { PropTypes } from 'prop-types'; 
import styles from './Movie.module.css';

const Movies = ({setSearch}) => {
  let location = useLocation();
  location = location.pathname.split('/');
  const [response, setResponse] = useState('');
  const [searchParams , setSearchParams] = useSearchParams();

  const search = evt => {
    evt.preventDefault();
    let value = evt.target.elements.input.value;
    setSearchParams({ query: value });
    setSearch(value);
  }

  useEffect(()=>{
    if(searchParams.toString().split('=')[1]){
    searchInApi(searchParams.toString().split('=')[1]).then(res => setResponse(res.data.results));
    }
  },[searchParams])

  function form(location) {
    if (Array.isArray(location) && location.length < 3) {
      return (
        <form className={styles.form} onSubmit={evt => search(evt)}>
          <input className={styles.input} type="text" name="input"></input>
          <button className={styles.button} type="submit">Search</button>
        </form>
      );
    }
  }

  function render(response) {
    if (Array.isArray(response)) {
      if(!response.length){
        return( <p>We have no matching movies</p>)
      }else{
        return(
          <ul>{
            response.map(ele => {
              return (
                <li key={ele.id}>
                  <Link to={`/movies/${ele.id}`}>{ele.title}</Link>
                </li>
              );
            })
          }</ul>
        )
      }
    }
  }

  return (
    <div>
      {form(location)}
      {render(response)}
    </div>
  );
};

Movies.propTypes = {
  setSearch: PropTypes.func.isRequired
}

export default Movies;