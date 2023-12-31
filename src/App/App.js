import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Details from "../Details/Details";
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Card from "../Card/Card";
import Error from "../Error/Error";

const App = () => {

  const [allParks, setAllParks] = useState(null);
  const [currentActivity, setCurrentActivity] = useState('select');
  const [filteredParks, setFilteredParks] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX`)
      .then((res) => res.json())
      .then((res) => {
        setAllParks(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(true)
      });
  }, []);

  useEffect(() => {
    if (allParks) {
      setFilteredParks(filterParksByActivity(currentActivity, allParks))
    }
  }, [currentActivity]);

  const filterParksByActivity = (activity, parks) => {
    if (activity !== 'select') {
      return parks.filter(park => {
        const parkActivities = park.activities.map(activity => activity.name)
        return parkActivities.includes(activity)
      })
    } else {
      return parks
    };
  };

  const showCards = (parks) => {
    if (isLoading) {
      return (
        <>
          <p>loading ...</p>
        </>
      )
    } else if (!parks) {
      return (
        <Error />
      )
    } else if (parks.length < 1) {
      return (
        <>
          <Form setCurrentActivity={setCurrentActivity} />
          <p>there are no parks matching this activity, try looking for a different activity</p>
        </>
      )
    } else if (parks) {
      return (
        <>
          <Form setCurrentActivity={setCurrentActivity} />
          <div className='cards'>
            {parks.map(park => {
              return <Card park={park} key={park.id} />
            })}
          </div>
        </>
      );
    }
  };

  return (
    <>
      <Nav />
      {error ? (
        <Error error={error}/>
      ) :
      <Routes>
        <Route path='/' element={<div>{filteredParks ? showCards(filteredParks) : showCards(allParks)}</div>} />
        <Route path='/:parkCode' element={<Details allParks={allParks} setError={setError} error={error} />} />
        <Route path='*' element={<Error />} />
      </Routes>
      }
    </>
  );
}

export default App;