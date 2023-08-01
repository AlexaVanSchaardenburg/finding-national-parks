import './Form.css';

const Form = () => {

  return (
    <div className='form'>
      <div className='form-box'>
      <h1>find the perfect park for your next adventure</h1>
      <select className='dropdown'>
        <option value="select">select an activity</option>
        <option value="arts-and-culture">arts and culture</option>
        <option value="astronomy">astronomy</option>
        <option value="stargazing">stargazing</option>
        <option value="biking">biking</option>
        <option value="road-biking">road biking</option>
        <option value="camping">camping</option>
        <option value="backcountry-camping">backcountry camping</option>
        <option value="car-or-front-country-camping">car or front country camping</option>
        <option value="horse-camping">horse camping</option>
        <option value="canyoneering">canyoneering</option>
        <option value="climbing">climbing</option>
        <option value="rock-climbing">rock climbing</option>
        <option value="guided-tours">guided tours</option>
        <option value="hiking">hiking</option>
        <option value="front-country-hiking">front-country hiking</option>
        <option value="junior-ranger-program">junior ranger program</option>
        <option value="wildlife-watching">wildlife watching</option>
        <option value="birdwatching">birdwatching</option>
        <option value="park-film">park film</option>
        <option value="museum-exhibits">museum exhibits</option>
        <option value="shopping">shopping</option>
        <option value="bookstore-and-park-store">bookstore and park store</option>
      </select>
      </div>
    </div>
  );
}

export default Form;