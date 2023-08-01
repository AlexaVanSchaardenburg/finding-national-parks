import './Home.css';
import Nav from "../Nav/Nav";
import Form from "../Form/Form";
import Cards from "../Cards/Cards";

const Home = ({ data }) => {

  return (
    <>
      <Nav />
      <Form />
      <Cards data={data}/>
    </>
  );
}

export default Home;