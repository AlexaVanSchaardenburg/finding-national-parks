import './Home.css';
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Card from "../Card/Card";
//remove the below AND Details - this will all be passed in the route with the park code as the data and then the fetch will be excecuted with the parameters of the park code to display the data
import Details from "../Details/Details";

const Home = ({ data }) => {

  return (
    <>
      <Nav />
      <Form />
      <div className='cards'>
        {data.data.map(park => {
          return <Card park={park}/>
        })}
      </div>
    </>
  );
}

export default Home;