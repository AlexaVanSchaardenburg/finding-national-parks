import './Details.css';

const Details = ({ data }) => {

  return (
    <>
      <div 
        className='img' 
        style={{
          backgroundImage: `url(${data["images"][0]["url"]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} >
        <div className="park-summary-box">
          <h1>Name Here</h1>
          <p>States</p>
          <p>Summary</p>
        </div>
      </div>
      <div className='details'>
        <h2 className='details-header'>at a glance</h2>
          <div className='at-a-glance'>
            <div className='info-box'>
              <h3>activities</h3>
              <p>all activites go here</p>
            </div>
            <div className='other-at-a-glance'>
              <a href={data["url"]}>click here to go to park site!</a>
              <div className='info-box'>
                <h3>designation</h3>
                <p>park designation here</p>
              </div>
              <div className='info-box'>
                <h3>location</h3>
                <p>park location here</p>
              </div>
            </div>
          </div>
        <h2 className='details-header'>more info</h2>
          <div className='info-box'>
            <h3>weather overview</h3>
            <p>park weather overview here</p>
            <h3>getting in</h3>
            <p>park etrance fees here</p>
          </div>
        <h2 className='details-header'>park images</h2>
          {data["images"].map(image => {
            return (
              <img src={image.url} alt={image.title}/>
            )
          })}
      </div> 
    </>
  );
}

export default Details;