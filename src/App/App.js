import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
// import Home from "../Home/Home";
import Details from "../Details/Details";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";

const App = () => {

  const [allParks, setAllParks] = useState(null)
  const [currentActivity, setCurrentActivity] = useState('select')
  const [filteredParks, setFilteredParks] = useState(null)
  const [error, setError] = useState(false);
  const [view, setView] = useState('home')

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX`)
      .then((res) => res.json())
      .then((res) => {
        setAllParks(res.data)
        setView('home')
      })
      .catch((error) => {
        setError(true) 
      });
  }, [])

  useEffect(() => {
    if(allParks){
      setFilteredParks(filterParksByActivity(currentActivity, allParks))
    } 
  }, [currentActivity])

  const filterParksByActivity = (activity, parks) => {
    if (activity !== 'select'){
      return parks.filter(park => {
        const parkActivities = park.activities.map(activity => activity.name)
        return parkActivities.includes(activity)
      })
    } else {
      return parks
    }
  }

  const homeView = (parks) => {
    return (
      <>
        {parks 
        ? <>
          <Form setCurrentActivity={setCurrentActivity}/>
          <div className='cards'>
            {parks.map(park => {
              return <Card park={park} key={park.id} />
            })}
          </div>
        </>
        : <Error error={error} view={view}/>}
      </>
    )
  };

  return (
    <>
      <Nav />
      {error && <Navigate to='/error' />}
      <Routes>
        <Route path='/' element={<div>{filteredParks ? homeView(filteredParks) : homeView(allParks)}</div>} />
        <Route path='/:parkCode' element={<Details allParks={allParks} />} />
        <Route path='/error' />
        <Route path='*' element={<Error view={view}/>}/>
      </Routes>
    </>
  );
}

export default App;