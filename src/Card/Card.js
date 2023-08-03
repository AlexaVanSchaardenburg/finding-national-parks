import './Card.css';
import { NavLink } from 'react-router-dom'

// const Card = ({ park }) => {

  // console.log(park.parkCode)

//   return (
//     <NavLink to={`/${park.parkCode}`} className='card'>
//       <img src={park.images[0].url} className='img' alt='park image'/>
//       <div className='name-and-activities'>
//         <h2>{park.fullName}</h2>
//         <p className='activities'>{`${park.activities[0].name} | ${park.activities[1].name} | see more...`}</p>
//       </div>
//     </NavLink>
//   );
// }

const Card = ({ park }) => {
  return (
    <NavLink to={`/${park.parkCode}`} className='card'>
      <img src={park.images?.[0]?.url} className='img' alt='park image' />
      <div className='name-and-activities'>
        <h2>{park.fullName}</h2>
        <p className='activities'>{`${park.activities?.[0]?.name} | ${park.activities?.[1]?.name} | see more...`}</p>
      </div>
    </NavLink>
  );
}

export default Card;