import './Card.css';
import { NavLink } from 'react-router-dom'

const Card = ({ park }) => {

  const activityShortList = (activities) => {
    if (activities.length < 1){
      return <p>click here to see more about this park!</p>
    } else if (activities.length < 2) {
      return <p>{`${park.activities[0].name} | see more about this park...`}</p>
    } else if (activities.length < 3) {
      return <p>{`${park.activities[0].name} | ${park.activities[1].name} | see more about this park...`}</p>
    }else {
      return <p className='activities'>{`${park.activities[0].name} | ${park.activities[1].name} | ${park.activities[2].name} | see more...`}</p> 
    }
  }

  return (
    <>
      {park.activities[0]
        ? <NavLink to={`/${park.parkCode}`} className='card'>
        {park.images[0] ? <img src={park.images[0].url} className='img' alt='park image' /> : <p>no image here</p>}
        {/* add on error to handle bad image paths
        <img onError={imageOnError} src={park.images?.[0]?.url} className='img' alt='park image' /> 

const imageOnError = (event) => {
    event.currentTarget.src = <path to your broken image>;
};
*/}
        {/* <img src={park.images?.[0]?.url} className='img' alt='park image' /> */}
        <div className='name-and-activities'>
          <h2>{park.fullName}</h2>
          {/* <p className='activities'>{`${park.activities?.[0]?.name} | ${park.activities?.[1]?.name} | see more...`}</p> */}
          {/* <p>{`${activityShortList(park.activities)} | see more ...`}</p> */}
          {activityShortList(park.activities)}
        </div>
      </NavLink>
      : <></>}
    </>
  );
}

export default Card;