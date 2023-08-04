import './Loading.css';
import { NavLink } from 'react-router-dom'

const Loading = () => {

  return (
      <div className='loading'>
        <h1>Page is Loading...</h1>
        <NavLink to='/' className='go-home'>🏕️ go back to home 🏕️</NavLink>
      </div>
  );
}

export default Loading;