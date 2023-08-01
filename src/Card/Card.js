import './Card.css';

const Card = ({ park }) => {

  return (
    <div className='card'>
      <div className='img-box'>
        {park.images 
        ? <img src={park["images"][0]["url"]} className='img' alt='park image'/>
        : <p>no image</p>}
      </div>
      <div className='name-and-activities'>
        <h2>{park.fullName}</h2>
        <p className='activities'>activites go here</p>
      </div>
    </div>
  );
}

export default Card;