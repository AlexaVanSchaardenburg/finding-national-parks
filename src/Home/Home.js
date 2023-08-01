import './Home.css';
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Card from "../Card/Card";

const Home = ({ data }) => {

  return (
    <>
      <Nav />
      <Form />
      <div className='cards'>
        {data.map(park => {
          return <Card park={park}/>
        })}
      </div>
    </>
  );
}

export default Home;