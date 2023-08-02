import './Details.css';
import { NavLink } from 'react-router-dom'

const Details = ({ data }) => {

  return (
    <div className='details'>
      <div 
        className='background-img' 
        style={{
          backgroundImage: `url(${data.images[0].url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} >
        <div className="park-summary-box">
          <div className='title-home'>
          <h1 className='park-summary'>{`${data.fullName}`}</h1>
          <NavLink className='home-button' to='/'>view other parks</NavLink>
          </div>
          <p className='park-summary'>{`${data.states}`}</p>
          <p className='park-summary'>{`${data.description}`}</p>
        </div>
      </div>
        <h2 className='details-header'>at a glance</h2>
          <div className='at-a-glance'>
            <div className='info-box' id='activities'>
              <h3>activities</h3>
              {data.activities.map(activity => {
                return (
                  <p className='listed-activity'>{`${activity.name}`}</p>
                )
              })}
            </div>
            <div className='location-designation-link'>
              <a href={data["url"]}>click here to go to park site!</a>
              <div className='info-box'>
                <h3>designation</h3>
                <p>{`${data.designation}`}</p>
              </div>
              <div className='info-box' id='location'>
                <h3>location</h3>
                <p>{`${data.directionsInfo}`}</p>
              </div>
            </div>
          </div>
        <h2 className='details-header'>park images</h2>
          {data["images"].map(image => {
            return (
              <img src={image.url} alt={image.title} className='park-images'/>
            )
          })}
      </div> 
  );
}

export default Details;