import './Error.css';
import { NavLink } from 'react-router-dom';

const Error = ({ error, view }) => {



  return (
      <div className='error'>
        <h1>uh-oh, something went wrong</h1>
       {error && <p>please try again later</p>}
       {view === 'home' && <p>please check your connection and try again</p>}
       {view === 'other' && <NavLink to='/' className='go-home'>🏕️ go back to home 🏕️</NavLink>}
      </div>
  );
}

export default Error;