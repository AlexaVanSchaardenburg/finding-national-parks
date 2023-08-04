import './Error.css';
import { NavLink } from 'react-router-dom'

const Error = ({ errorOnLoad }) => {

  return (
      <div className='error'>
        <h1>uh-oh, something went wrong</h1>
       {errorOnLoad ? <p>Please try again later</p> : <NavLink to='/' className='go-home'>🏕️ go back to home 🏕️</NavLink>}
      </div>
  );
}

export default Error;