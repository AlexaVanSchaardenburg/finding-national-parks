import './Error.css';
import { NavLink } from 'react-router-dom';

const Error = ({ error }) => {

  return (
      <div className='error'>
        <h1>uh-oh, something went wrong</h1>
       {error
       ? <p>please try again later</p>
       : <>
        <p>please check your connection and try again</p>
        <NavLink to='/' className='go-home'>🏕️ go back to home 🏕️</NavLink>
       </>}
       
      </div>
  );
}

export default Error;