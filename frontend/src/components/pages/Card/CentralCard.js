import React, { useState } from 'react';

const CentralCard = (props) => {
  const [seemore, setSeemore] = useState(true);

  function seemoreHandler() {
    setSeemore(!seemore);
  }
   let pictureNotFound = "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=";
  return (
    <div>
      <h2>{props.data.name}</h2>
      {console.log(props.data.url)}
      <img src={props.data.url === "" ? pictureNotFound : props.data.url } alt="data Logo" />
      <p>Symbol: {props.data.symbol}</p>
      <p>Address: {props.data.address}</p>
      {seemore ? (
        <button onClick={seemoreHandler}>See More</button>
      ) : (
        <div>
          <p>Additional information:</p>
          <p>{/* Include additional information here */}</p>
          <button onClick={seemoreHandler}>See Less</button>
        </div>
      )}
    </div>
  );
};

export default CentralCard;
