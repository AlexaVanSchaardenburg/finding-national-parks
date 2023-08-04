import './Nav.css';
import logo from '../materials/logo_header.png'

const Nav = () => {

  return (
    <div className='nav'>
      <img src={logo} className='header-img' alt='ParkSeeker logo - green mountians set next to the word ParkSeeker' />
    </div>
  );
}

export default Nav;