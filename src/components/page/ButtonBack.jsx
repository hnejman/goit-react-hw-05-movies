import { Link } from 'react-router-dom';

export const ButtonBack = ({adr}) => {
  return (
    <>
    <Link to={adr}>
    <button type="button">
      back
    </button>
    </Link>
    </>
  )
};
