import './Cards.css';
import Card from '../Card/Card'

const Cards = ({ data }) => {

// console.log(data)

  return (
    <>
      {data.map(park => {
        return <Card park={park}/>
      })}
    </>
  );
}

export default Cards;