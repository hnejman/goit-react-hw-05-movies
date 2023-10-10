import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types'; 

export const ButtonBack = ({adr}) => {
  return (
    <>
    <Link to={"/" + adr} className='buttonBack' >
    <button type="button" >
    &lt; back
    </button>
    </Link>
    </>
  )
};

ButtonBack.propTypes ={
  adr: PropTypes.string.isRequired
}
