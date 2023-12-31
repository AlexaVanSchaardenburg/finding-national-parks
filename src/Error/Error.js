import './Error.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Error = ({ error }) => {

  return (
    <div className='error'>
      <h1>uh-oh, something went wrong</h1>
      {error
        ? <p>something went wrong on our end, please try again later</p>
        : <>
          <p>please check your connection and try again</p>
          <NavLink to='/' className='go-home'>🏕️ go back to home 🏕️</NavLink>
        </>}
    </div>
  );
}

export default Error;

Error.propTypes = {
  error: PropTypes.bool
};