import './Card.css';
import { NavLink } from 'react-router-dom'

const Card = ({ park }) => {



  return (
    <>
      {park.activities.length > 1 
        ? <NavLink to={`/${park.parkCode}`} className='card'>
        {park.images[0] ? <img src={park.images[0].url} className='img' alt='park image' /> : <p>no image here</p>}
        {/* <img src={park.images?.[0]?.url} className='img' alt='park image' /> */}
        <div className='name-and-activities'>
          <h2>{park.fullName}</h2>
          <p className='activities'>{`${park.activities?.[0]?.name} | ${park.activities?.[1]?.name} | see more...`}</p>
        </div>
      </NavLink>
      : <></>}
    </>
  );
}

export default Card;