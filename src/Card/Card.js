import './Card.css';

const Card = ({ park }) => {

  console.log(park["activities"][0]["name"])

  return (
    <div className='card'>
      <div className='img-box'>
        <img src={park["images"][0]["url"]} className='img' alt='park image'/>
      </div>
      <div className='name-and-activities'>
        <h2>{park.fullName}</h2>
        <p className='activities'>{`${park["activities"][0]["name"]} | ${park["activities"][1]["name"]} | ${park["activities"][2]["name"]} | see more...`}</p>
      </div>
    </div>
  );
}

export default Card;