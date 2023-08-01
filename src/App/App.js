import './App.css';
import Nav from "../Nav/Nav";
import Form from "../Form/Form";

const App = () => {

  //need a fetch request to get all the parks on page load

  //pass all the parks to the cards - where it will map over and use the card component to display them
    //card component will need to be able to iterate over the activities of each park 

  //when a park is clicked we need to get the id or short hand of that park then fetch jsut that park and pass that to the details component - usee the useParams in the url? put the shorthand for the park in the url, make details say loading until fetch returns with park details and it is displayed - look at rancid for example

  //need a state to store what the activity selected in the form - this state change will automatically trigger a function to filter through all the parks and pass those filtered parks to the the card component to display

  return (
    <>
      <Nav />
      <Form />
    </>
  );
}

export default App;

  // useEffect(() => {
  //   fetch('https://developer.nps.gov/api/v1/activities/parks?id=,&api_key=l6jn2TRgOT3bXFR8Fk7iAF7OP6Bkf7lslJE9TMMX')
  //     .then(res => res.json())
  //     .then(res => console.log(res))
  // },[]);
