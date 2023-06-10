import { getFromApi } from 'components/getFromApi';
import { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";
// import { MovieDetails } from "./MovieDetails";

export function Home() {
  const [response, setResponse] = useState([]);

useEffect(()=>{
  getFromApi('3/movie/popular')
  .then(response=>{setResponse(response.data.results)});
},[])

  return (
    <div>
      {console.log(response)}
      {response.map(element => {
                return(<div>{element.title}</div>)
            })}
    </div>
  );
}
