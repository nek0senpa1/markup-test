import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

import VegasLeft from './VegasLeft';
import VegasRight from './VegasRight';

function App() {

  const [hotel, setHotel] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    
    axios.get( 'http://localhost:8888/api/hotels/venetian')
    .then( res => {
        // console.log(res.data)
        setHotel(res.data)
    })
    .catch(err => {
        // console.log(err)
        setError(err)
    });

}, []);

if (hotel.name === "") {
  return(
    <div><p>Loading...</p></div>
  )
} else {

  return (
    <div className="App">
      <div className="App-segment-1">
        <VegasLeft image={hotel.media} />
      </div>
      
      <div className="App-segment"> 
        <VegasRight info={hotel}/>
      </div>
      
    </div>
  );
  }
  
}

export default App;
