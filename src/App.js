import './App.css';
import React, { useEffect, useState } from 'react';
const axios = require('axios');

const App = () => {

  const [image, setImage] = useState("");

  useEffect(() => {
    getNASAImageOfTheDay();
  });

  // AXIOS REQUEST TO BACKEND
  const getNASAImageOfTheDay = async () => {
    await axios.get('http://localhost:3001/images/APOD')
      .then(function (response) {
        setImage(response.data);
        console.log(image);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  return (
    <div className="App">
      <p>Hello There. Weclome to the NASA API Frontend</p>
      <img src={image} alt="ZhurongRover" />
    </div>
  );
}

export default App;
