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

  //need a state to store what the activity selected in the form - this state change will automatically trigger a function to filter through all the parks and pass those filtered parks to the the card component to display


  const allParksView = (parks) => {
    return (
      <>
        {allParks 
        ? <>
          <Form />
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
          <Route path='/' element={<div>{allParksView(allParks)}</div>} />
        )}
        <Route path='/:parkCode' element={<Details allParks={allParks} />} />
      </Routes>
    </>
  );
}

export default App;