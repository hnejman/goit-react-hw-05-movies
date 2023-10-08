import { useNavigate } from 'react-router-dom';

export const ButtonBack = ({to}) => {
  const navigate = useNavigate();
  const handleGoBack = () =>{
    navigate(-to)
  }
  return (
    <button type="button" onClick={handleGoBack}>
      back
    </button>
  )
};
