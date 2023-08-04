import './Details.css';
import { NavLink, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Error from "../Error/Error";
import PropTypes from 'prop-types';

const Details = ({ setError, error }) => {

  const parkCode = useParams().parkCode;

  const [park, setPark] = useState(null);

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&limit=1&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX`)
      .then((res) => res.json())
      .then((res) => {
        setPark(res.data[0])
      })
      .catch((error) => {
        setError(true)
      });
  }, [])

  return (
    <>
      {park
        ? <div className='details'>
          <div
            className='background-img'
            style={{
              backgroundImage: `url(${park.images[0].url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }} >
            <div className="park-summary-box">
              <div className='title-home'>
                <h1 className='park-summary'>{`${park.fullName}`}</h1>
                <NavLink className='home-button' to='/'>view other parks</NavLink>
              </div>
              <p className='park-summary'>{`${park.states}`}</p>
              <p className='park-summary'>{`${park.description}`}</p>
            </div>
          </div>
          <h2 className='details-header'>at a glance</h2>
          <div className='at-a-glance'>
            <div className='info-box' id='activities'>
              <h3>activities</h3>
              {park.activities.map(activity => {
                return (
                  <p key={activity.id} className='listed-activity'>{`${activity.name}`}</p>
                )
              })}
            </div>
            <div className='location-designation-link'>
              <a href={park["url"]}>click here to go to park site!</a>
              <div className='info-box'>
                <h3>designation</h3>
                <p>{`${park.designation}`}</p>
              </div>
              <div className='info-box' id='location'>
                <h3>location</h3>
                <p>{`${park.directionsInfo}`}</p>
              </div>
            </div>
          </div>
          <h2 className='details-header'>park images</h2>
          {park["images"].map(image => {
            return (
              <img key={image.url} src={image.url} alt={image.title} className={image.caption} />
            )
          })}
        </div>
        : <Error error={error} />}
    </>
  );
}

export default Details;

Details.propTypes = {
  setError: PropTypes.func,
  error: PropTypes.bool
};