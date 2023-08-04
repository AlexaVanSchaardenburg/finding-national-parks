import './Error.css';
import { NavLink } from 'react-router-dom'

const Error = () => {

  return (
      <div className='error'>
        <h1>uh-oh, something went wrong</h1>
        <NavLink to='/' className='go-home'>🏕️ go back to home 🏕️</NavLink>
      </div>
  );
}

export default Error;