import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types'; 
import styles from './ButtonBack.module.css';

export const ButtonBack = ({adr}) => {
  return (
    <>
    <Link to={"/" + adr} className={styles.buttonBack} >
    <button className={styles.button} type="button" >
    &lt; back
    </button>
    </Link>
    </>
  )
};

ButtonBack.propTypes ={
  adr: PropTypes.string.isRequired
}
