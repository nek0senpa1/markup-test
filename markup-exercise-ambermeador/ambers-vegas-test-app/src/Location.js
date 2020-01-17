import React from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMapMarker} from '@fortawesome/free-solid-svg-icons'


function Location(props) {

    // console.log('Location info', props)

    return(
        <div >
            <div className="content3">
                <p><FontAwesomeIcon icon={faMapMarker}/>{props.location.address}</p>
                <img className="Image2" alt="map" src={process.env.PUBLIC_URL + `${props.pics[1].href}`}></img>
            </div>
            
        </div>
    )
    

  
}

export default Location;