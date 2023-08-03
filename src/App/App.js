import './App.css';
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
// import Home from "../Home/Home";
import Details from "../Details/Details";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Card from "../Card/Card";

const App = () => {

  const [allParks, setAllParks] = useState(null)
  const [currentActivity, setCurrentActivity] = useState('select')
  const [filteredParks, setFilteredParks] = useState(null)

  // console.log(currentActivity)

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX`)
      .then((res) => res.json())
      .then((res) => {
        setAllParks(res.data)
      })
      // .catch((error) => {
      //   console.error('Error fetching data:', error);
      //   setAllParks(null); 
      // });
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

  const homeView = (parks, type) => {
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
        : <p>loading...</p>}
      </>
    )
  };

  return (
    <>
      <Nav />
      <Routes>
        {allParks && (
          <Route path='/' element={<div>{filteredParks ? homeView(filteredParks, 'filtered') : homeView(allParks, 'ALL')}</div>} />
        )}
        <Route path='/:parkCode' element={<Details allParks={allParks} />} />
      </Routes>
    </>
  );
}

export default App;