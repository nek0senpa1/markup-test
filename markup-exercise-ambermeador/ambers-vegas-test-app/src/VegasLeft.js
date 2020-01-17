import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

function VegasLeft(props) {

    const [hotels, setHotels] = useState([]);
    const [error, setError] = useState();

    // console.log(props)
    
    useEffect(() => {
    
        axios.get( 'http://localhost:8888/api/hotels')
        .then( res => {
            // console.log(res.data.list)
            ordermove(res.data.list)
        })
        .catch(err => {
            console.log(err)
            setError(err)
        });

    }, []);

    // const sortByAll = (hotels) => {
    //   const sorted = hotels.sort((a,b) => {
    //     return b.name - a.name;
    //   } )
    //   setHotels(sorted)
    // }
    // might want to remove later

    const ordermove = (array) => {
      // console.log(array)

      function compare(a, b) {
        const name1 = a.name.toUpperCase();
        const name2 = b.name.toUpperCase();
      
        let comp = 0;
        if (name1 > name2) {
          comp = 1;
        } else if (name1 < name2) {
          comp = -1;
        }
        return comp;
      }

    array.sort(compare)
    
    array = Array.from(new Set(array.map(a => a.name)))
    .map( name => {
      return array.find(a => a.name === name)
    })
    
    setHotels(array)
    // console.log(array)
  }



  if ( hotels.length === 0 ) {
    return (
      <div><p>Loading</p></div>
    )  
  } else if (props.image === undefined) {
    return (
      <div><p>Loading</p></div>
    )  
  } else {
    return (
      <div>

        <div className="toptext">
          <p> <FontAwesomeIcon icon={faChevronCircleLeft} />   SEE ALL LAS VEGAS HOTELS</p>
        </div>

        <div>
          <img className="Image1" alt="small hotel" src={process.env.PUBLIC_URL + `${props.image[0].href}`}></img>
        </div>
        
        {hotels.map(hots => {
          return(
            <div className="left-div-one" key={hots.code}>
              <div className="App-seg-a">
                <div className="Spacing1"><p>{hots.name}</p></div>
              </div>
              <div className="App-seg-b">
                <div className="Spacing1"><p>{hots.price.toFixed(2)}</p></div>
              </div> 
            </div>         
          )
        })}

      </div>
    )
  }
  
}

export default VegasLeft;
