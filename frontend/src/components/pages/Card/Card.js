import React, { useState } from 'react';

const Card = (props) => {
  const [seemore, setSeemore] = useState(true);

  function seemoreHandler() {
    setSeemore(!seemore);
  }
   let pictureNotFound = "https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=";
  return (
    <div>
      <h2>{props.party.name}</h2>
      {console.log(props.party.url)}
      <img src={props.party.url === "" ? pictureNotFound : props.party.url } alt="Party Logo" />
      <p>Symbol: {props.party.symbol}</p>
      <p>Address: {props.party.address}</p>
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

export default Card;
