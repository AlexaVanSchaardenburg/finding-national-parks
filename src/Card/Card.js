import './Card.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({ park }) => {

  const [hasError, setHasError] = useState(false)

  const activityShortList = (activities) => {
    if (activities.length < 1) {
      return <p className='activities'>click here to see more about this park!</p>
    } else if (activities.length < 2) {
      return <p className='activities'>{`${park.activities[0].name} | see more about this park...`}</p>
    } else if (activities.length < 3) {
      return <p className='activities'>{`${park.activities[0].name} | ${park.activities[1].name} | see more about this park...`}</p>
    } else {
      return <p className='activities'>{`${park.activities[0].name} | ${park.activities[1].name} | ${park.activities[2].name} | see more...`}</p>
    }
  }

  const handleImageError = () => {
    setHasError(true)
  }

  return (
    <>
      <NavLink to={`/${park.parkCode}`} className='card'>
        {park.images[0] ? <img src={hasError ? '../materials/home_image.jpg' : park.images[0].url} className='img' alt={park.images[0].caption} onError={handleImageError} /> : <img src='../materials/home_image.jpg' alt='park image' />}
        <div className='name-and-activities'>
          <h2>{park.fullName}</h2>
          {activityShortList(park.activities)}
        </div>
      </NavLink>
    </>
  );
}

export default Card;

Card.propTypes = {
  park: PropTypes.shape({
    parkCode: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
      })
    ).isRequired,
    fullName: PropTypes.string.isRequired,
    activities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};