// import './Home.css';
// import Nav from "../Nav/Nav";
// import Form from "../Form/Form";
// import Card from "../Card/Card";
// import { useEffect, useState } from 'react'

// const Home = () => {

//   const [allParks, setAllParks] = useState(null)

//   //need a fetch request to get all the parks on page load


//   useEffect(() => {
//     fetch(`https://developer.nps.gov/api/v1/parks?parkCode=&limit=471&start=0&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX`)
//       .then((res) => res.json())
//       .then((res) => {
//         setAllParks(res)
//       })
//       .then(() => console.log(allParks))
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setAllParks(null); 
//       });
//   }, [])

//   return (
//     <>
//       <Nav />
//       <Form />
//       <div className='cards'>
//         {allParks.data.map(park => {
//           return <Card park={park}/>
//         })}
//       </div>
//     </>
//   );
// }

// export default Home;