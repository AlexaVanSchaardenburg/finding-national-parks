import './Form.css';
import PropTypes from 'prop-types';

const Form = ({ setCurrentActivity }) => {

  const handleChange = (event) => { 
    setCurrentActivity(event.target.value)
  }

  return (
    <div className='form'>
      <div className='form-box'>
      <h1>find the perfect park for your next adventure</h1>
      <select className='dropdown' onChange={handleChange}>
        <option value="select">select an activity</option>
        <option value="Arts and Culture">arts and culture</option>
        <option value="Astronomy">astronomy</option>
        <option value="Stargazing">stargazing</option>
        <option value="Biking">biking</option>
        <option value="Road Biking">road biking</option>
        <option value="Camping">camping</option>
        <option value="Backcountry Camping">backcountry camping</option>
        <option value="Car or Front Country Camping">car or front country camping</option>
        <option value="Horse Camping">horse camping</option>
        <option value="Canyoneering">canyoneering</option>
        <option value="Climbing">climbing</option>
        <option value="Rock Climbing">rock climbing</option>
        <option value="Guided Tours">guided tours</option>
        <option value="Hiking">hiking</option>
        <option value="Front Country Hiking">front-country hiking</option>
        <option value="Junior Ranger Program">junior ranger program</option>
        <option value="Wildlife Watching">wildlife watching</option>
        <option value="Birdwatching">birdwatching</option>
        <option value="Park Film">park film</option>
        <option value="Museum Exhibits">museum exhibits</option>
        <option value="Shopping">shopping</option>
        <option value="Bookstore and Park Store">bookstore and park store</option>
      </select>
      </div>
    </div>
  );
}

export default Form;

Form.propTypes = {
  setCurrentActivity: PropTypes.func.isRequired
}