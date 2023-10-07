import { useNavigate } from 'react-router-dom';

export const ButtonBack = () => {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  if (pathname !== '/goit-react-hw-05-movies') {
    return (
      <button type="button" onClick={()=>{navigate(-1)}}>
        back
      </button>
    );
  }
};
