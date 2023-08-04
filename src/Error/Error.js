import './Error.css';
import { NavLink } from 'react-router-dom'

const Error = () => {

  return (
      <div>
        <h1>uh-oh, something went wrong</h1>
        <NavLink to='/'>🏕️ go back to home 🏕️</NavLink>
      </div>
  );
}

export default Error;