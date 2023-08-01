import './App.css';
import Nav from "../Nav/Nav";

const App = () => {

  return (
    <>
      <h1>App</h1>  
      <Nav />
    </>
  );
}

export default App;

  // useEffect(() => {
  //   fetch('https://developer.nps.gov/api/v1/activities/parks?id=,&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX')
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // },[]);
